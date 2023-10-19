export const i18n = {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr','es'],
} as const

export type Locale = (typeof i18n)['locales'][number]