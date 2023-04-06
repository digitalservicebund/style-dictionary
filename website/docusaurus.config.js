// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Style Dictionary",
  tagline: "Angie Design System's design tokens",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://digitalservicebund.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/style-dictionary/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "digitalservicebund", // Usually your GitHub org/user name.
  projectName: "style-dictionary", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/digitalservicebund/style-dictionary/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Style Dictionary",
        logo: {
          alt: "DigitalService Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/digitalservicebund/style-dictionary",
            label: "source code",
            position: "right",
          },
          {
            href: "https://www.npmjs.com/package/@digitalservice4germany/style-dictionary",
            label: "npm",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting started",
                to: "/docs/intro",
              },
              {
                label: "How-to guides",
                to: "/docs/category/how-to-guides",
              },
              {
                label: "Reference",
                to: "/docs/category/reference",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/digitalservicebund/style-dictionary",
              },
              {
                label: "npm",
                href: "https://www.npmjs.com/package/@digitalservice4germany/style-dictionary",
              },
            ],
          },
        ],
        copyright: `Last update: ${new Date()}. Created with Docusaurus. Illustrations from unDraw.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
