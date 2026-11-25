<?php
// Export the scenario catalog of the local_mcpcourse plugin to site/data/scenarios.json.
//
// Usage: php scripts/export-scenarios.php <path to the plugin> [output file]
//
// The plugin is the single source: this script only reads its scenario definitions, the English titles and
// descriptions of its language file, and the family of each scenario as published in skills/ (the scenario headings
// "## <title> (`<slug>`)" of each SKILL.md). It needs no Moodle installation.

declare(strict_types=1);

if ($argc < 2) {
    fwrite(STDERR, "usage: php scripts/export-scenarios.php <plugin dir> [output]\n");
    exit(2);
}
$plugin = rtrim($argv[1], '/');
$root = dirname(__DIR__);
$output = $argv[2] ?? $root . '/site/data/scenarios.json';
$scenariodir = $plugin . '/classes/local/scenario';
$langfile = $plugin . '/lang/en/local_mcpcourse.php';
foreach ([$scenariodir, $langfile] as $required) {
    if (!file_exists($required)) {
        fwrite(STDERR, "ERROR: $required not found: is $plugin the local_mcpcourse plugin?\n");
        exit(1);
    }
}

define('MOODLE_INTERNAL', true);
if (!function_exists('get_config')) {
    function get_config($plugin, $name = null) {
        return false;
    }
}

$string = [];
require($langfile);
$strings = $string;

foreach (['build', 'ops', 'tracking'] as $part) {
    require_once($scenariodir . "/scenario_defs_$part.php");
}
$defs = \local_mcpcourse\local\scenario\scenario_defs_build::all()
    + \local_mcpcourse\local\scenario\scenario_defs_ops::all()
    + \local_mcpcourse\local\scenario\scenario_defs_tracking::all();

// Families: one per published skill, read from skills/<name>/SKILL.md.
$families = [];
foreach (glob($root . '/skills/*/SKILL.md') as $skillfile) {
    $text = file_get_contents($skillfile);
    if (!preg_match('/^---\n(.*?)\n---/s', $text, $m)) {
        continue;
    }
    $name = preg_match('/^name:\s*["\']?([a-z0-9-]+)/m', $m[1], $n) ? $n[1] : basename(dirname($skillfile));
    // Each scenario of a skill is a heading "## <title> (`<slug>`)" of its body.
    if (!preg_match_all('/^## .*\(`([a-z0-9_]+)`\)\s*$/m', $text, $s) || !$s[1]) {
        fwrite(STDERR, "ERROR: no scenario heading \"## <title> (`<slug>`)\" in $skillfile\n");
        exit(1);
    }
    foreach ($s[1] as $slug) {
        $families[$slug] = $name;
    }
}

$version = '';
if (is_readable($plugin . '/version.php')) {
    $vt = file_get_contents($plugin . '/version.php');
    if (preg_match('/->release\s*=\s*\'([^\']+)\'/', $vt, $vm)) {
        $version = $vm[1];
    }
}

$out = [];
foreach ($defs as $slug => $def) {
    if (!isset($strings['scenario_' . $slug])) {
        fwrite(STDERR, "ERROR: no English title scenario_$slug in the plugin\n");
        exit(1);
    }
    if (!isset($families[$slug])) {
        fwrite(STDERR, "ERROR: scenario $slug belongs to no skill in skills/: run scripts/sync-skills.sh first\n");
        exit(1);
    }
    $out[] = [
        'slug' => $slug,
        'family' => $families[$slug],
        'title' => $strings['scenario_' . $slug],
        'summary' => $strings['scenario_' . $slug . '_desc'] ?? $def['goal'],
        'goal' => $def['goal'],
        'risk' => $def['risk'] ?? 'low',
    ];
}
usort($out, fn($a, $b) => [$a['family'], $a['slug']] <=> [$b['family'], $b['slug']]);

$json = json_encode([
    'source' => 'local_mcpcourse ' . $version,
    'count' => count($out),
    'scenarios' => $out,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
@mkdir(dirname($output), 0775, true);
file_put_contents($output, $json);
fwrite(STDOUT, count($out) . " scenarios written to $output\n");
