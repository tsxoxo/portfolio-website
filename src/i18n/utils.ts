
import { translations, defaultLang } from './translations';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    console.log(`const [,lang] = URL.PATHNAME.SPLIT('/'): ${lang}`);

    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: keyof typeof translations[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key];
    }
}