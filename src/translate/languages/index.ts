import { locales as portugueseLangauge } from './pt'
import { locales as englishLanguage } from './en'
import { locales as frenchLanguage} from './fr'
import { locales as spanishLanguage} from './es'

const locales = {
    ...portugueseLangauge,
    ...englishLanguage,
    ...frenchLanguage,
    ...spanishLanguage
}

export { locales }
