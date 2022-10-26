/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SMA Technologies Help',
  tagline: 'Help',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'help-app',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/help-app/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'corelation-connector-docs',
        path: './content/smatechnologies/corelation-connector-docs/docs',
        routeBasePath: 'opcon/connectors/corelation',
        sidebarPath: require.resolve('./content/smatechnologies/corelation-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/corelation-connector-docs/blob/main',

      },
    ],
    [
      require.resolve('@cmfcmf/docusaurus-search-local'), 
      {
      }
    ],
  ],
};
