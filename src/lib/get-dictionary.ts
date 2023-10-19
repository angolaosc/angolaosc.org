import type { Locale } from '../i18n-config'

const dictionaries = {
    pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
    es: () => import('@/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
