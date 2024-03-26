import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Your Own Stuff',
  description: 'The Cloud you finally love',
  themeConfig: {
    logo: '../assets/hausi.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/why' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Why', link: '/why' },
          { text: 'Getting Started', link: '/quickstart' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-own-stuff' },
    ],

    footer: {
      message: 'Released under the AGPL-3.0 licence.',
      copyright: 'Copyright © 2024-present Jan Kaltenegger & Simon Prosen',
    },
  },
});
