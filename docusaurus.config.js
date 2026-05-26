module.exports = {
  title: 'Gayathri | Technical Writer | Content Writer',
  tagline: 'Crafting clear documentation for complex technology',
  url: 'https://gayathria306-dot.github.io/gayathri-technical-writer/',
  baseUrl: '/Gayathri-Technical-Writing-Portfolio/',
  favicon: 'img/favicon.ico',
 
  organizationName: 'Gayathri P Ajith-tw',
  projectName: 'Gayathri-Technical-Writing-Portfolio',
 
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
 
  themeConfig: {
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Gayathri P Ajith`,
    },
  },
};
