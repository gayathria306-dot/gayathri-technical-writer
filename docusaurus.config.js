module.exports = {
  title: "Gayathri P Ajith",
  tagline: "Technical Content Writer | SEO Content Writer | Content Editor",
  url: "https://gayathria306-dot.github.io",
  baseUrl: "/gayathri-technical-writer/",

  favicon: "img/favicon.ico",

  organizationName: "gayathria306-dot",
  projectName: "gayathri-technical-writer",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Gayathri P Ajith",
      logo: {
        alt: "Gayathri Logo",
        src: "img/avatar.jpg",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Home",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Gayathri P Ajith`,
    },
  },
};
