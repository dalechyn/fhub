import { defineConfig } from 'vocs'
import pkg from '../src/package.json'
import { sidebar } from './sidebar-generated'

export default defineConfig({
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? 'https://fhub.sh'
      : process.env.VERCEL_URL,
  title: 'Fhub',
  titleTemplate: '%s · Fhub',
  description: 'Farcaster Hub Interface',
  ogImageUrl: {
    '/': '/og-image.png',
  },
  iconUrl: { light: '/logo-light.png', dark: '/logo-dark.png' },
  logoUrl: { light: '/logo-light.png', dark: '/logo-dark.png' },
  markdown: {
    code: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  rootDir: '.',
  sidebar: {
    '/': [
      { text: 'Introduction', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Error Handling', link: '/error-handling' },
      { text: 'Platform Compatibility', link: '/platform-compatibility' },
      {
        text: 'Guides',
        // collapsed: true,
        items: [{ text: 'TODO', link: '/guides/todo' }],
      },
      {
        text: 'API Reference',
        link: '/api',
        items: [],
      },
    ],
    '/api': { backLink: true, items: sidebar },
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/dalechyn/fhub',
    },
    {
      icon: 'warpcast',
      link: 'https://warpcast.com/dalechyn',
    },
  ],
  theme: {
    accentColor: {
      light: '#412a7b',
      dark: '#bd976a',
    },
  },
  topNav: [
    {
      text: 'API Reference',
      link: '/api',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/dalechyn/fhub/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/dalechyn/fhub/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})
