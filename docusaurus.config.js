// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const sProjectName = "mocpilot-app";

// Hosted on our own server at https://doc.mocpilot.com (root path), both locally and in CI.
// The app opens https://doc.mocpilot.com/?lang=..&path=.. — the server redirects it to /<locale>/docs/<path>.
const sBaseUrl = '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MOCPilot',
  tagline: 'The official page and documentation of MOCPilot app',
  favicon: 'img/favicon.ico',

  // Public domain
  url: 'https://doc.mocpilot.com',
  baseUrl: sBaseUrl,

  organizationName: 'OneManStudio-IL',
  projectName: sProjectName,
  deploymentBranch: 'gh-pages',

  // New storage namespace: theme choices saved by the removed color mode toggle are ignored
  future: {
    experimental_storage: { type: 'localStorage', namespace: 'docs2026' },
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn', 'cz', 'de', 'dk', 'es',
              'fi', 'fr', 'it', 'jp', 'nl', 'no',
              'pl', 'pt', 'ro', 'ru', 'se', 'sk', 
              'uk'
    ],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      cn: { label: '中文 (Zhōngwén)', direction: 'ltr' },
      cz: { label: 'Čeština', direction: 'ltr' },
      de: { label: 'Deutsch', direction: 'ltr' },
      dk: { label: 'Dansk', direction: 'ltr' },
      es: { label: 'Español', direction: 'ltr' },
      fi: { label: 'Suomi', direction: 'ltr' },
      fr: { label: 'Français', direction: 'ltr' },
      it: { label: 'Italiano', direction: 'ltr' },
      jp: { label: '日本語 (Nihongo)', direction: 'ltr' },
      nl: { label: 'Nederlands', direction: 'ltr' },
      no: { label: 'Norsk', direction: 'ltr' },
      pl: { label: 'Polski', direction: 'ltr' },
      pt: { label: 'Português', direction: 'ltr' },
      ro: { label: 'Română', direction: 'ltr' },
      ru: { label: 'Русский', direction: 'ltr' },
      se: { label: 'Svenska', direction: 'ltr' },
      sk: { label: 'Slovenčina', direction: 'ltr' },
      uk: { label: 'Українська', direction: 'ltr' }
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    // No toggle on the docs site (hidden in custom.css): direct visits follow the system color mode,
    // links from mocpilot.com pass the site's mode with ?docusaurus-theme=light|dark (not persisted).
    // disableSwitch stays false, otherwise Docusaurus ignores the ?docusaurus-theme parameter.
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: 'MOCPILOT',
      logo: {
        alt: 'MOCPilot',
        src: 'img/logo.svg',
        // The logo leads to the product website, which replaced the old landing page
        href: 'https://mocpilot.com',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    // Documentation only: news, legal pages and community links live on https://mocpilot.com
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} MOCPilot · <a href="https://mocpilot.com">mocpilot.com</a>`,
    },
    algolia: {
      appId: "AJXYEODYB6",
      apiKey: "9f69dbfa22c83cfa0712140916928f12",
      indexName: "MOCPilot Docs",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
