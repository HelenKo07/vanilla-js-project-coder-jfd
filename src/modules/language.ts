import { translations } from '../constants/translations';
import type { Language } from '../constants/translations';

const isLanguage = (value: string | null): value is Language => value === 'ua' || value === 'ru';

export const initLanguage = (lang?: Language) => {
    const storedLang = localStorage.getItem('preferred-lang');
    const activeLanguage = lang ?? (isLanguage(storedLang) ? storedLang : 'ua');
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && translations[activeLanguage][key]) {
            el.textContent = translations[activeLanguage][key];
        }
    });
    localStorage.setItem('preferred-lang', activeLanguage);
};