export const SITE = {
  title: 'Career Simulation 2',
  description: 'Your website description.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  de: {
    Überschrift: [
      { text: 'Einführung', link: 'de/introduction' },
      { text: 'Seite 2', link: 'de/page-2' },
      { text: 'Seite 3', link: 'de/page-3' },
      { text: 'Seite 3', link: 'de/page-4' },
      { text: 'Seite 3', link: 'de/page-5' },
      { text: 'Seite 3', link: 'de/page-6' }
    ],
    'Ein weiterer Abschnitt': [{ text: 'Seite 4', link: 'de/page-7' }]
  },
  en: {
    'Topics': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Step 1', link: 'en/page-2' },
      { text: 'Step 2', link: 'en/page-3' },
      { text: 'Step 3', link: 'en/page-4' },
      { text: 'Step 4', link: 'en/page-5' },
      { text: 'Step 5', link: 'en/page-6' },
    ],
    'Summary': [{ text: 'Conclusion', link: 'en/page-7' }]
  }
}
