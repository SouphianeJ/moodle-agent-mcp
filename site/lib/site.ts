/** Public addresses used by the site. No address here is loaded by the pages: they are plain links. */
export const site = {
  url: 'https://moodle-mcp.petits-detours.fr',
  repo: 'https://github.com/SouphianeJ/moodle-agent-mcp',
  releases: 'https://github.com/SouphianeJ/moodle-agent-mcp/releases/latest',
  central: 'https://moodle-oauth.petits-detours.fr',
  /** The listing of the plugin in the Moodle plugins directory: null until it exists. */
  marketplace: null as string | null,
  contact: 'souphianejender@gmail.com',
  pluginVersion: '2.5.2',
  toolCount: 542,
  moodleRange: '4.1 – 5.3',
};

export function skillZip(name: string): string {
  return `${site.repo}/releases/latest/download/${name}.zip`;
}
