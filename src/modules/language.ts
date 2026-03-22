import { translations } from '../constants/translations';
import type { Language } from '../constants/translations';

const isLanguage = (value: string | null): value is Language => value === 'ua' || value === 'ru';

export const initLanguage = (lang?: Language) => {
    const storedLang = localStorage.getItem('preferred-lang');
    const activeLanguage = lang ?? (isLanguage(storedLang) ? storedLang : 'ua');
    const elements = document.querySelectorAll('[data-i18n]');

    if (!document.body.dataset.languageBound) {
        const controls = document.querySelectorAll<HTMLButtonElement>('[data-lang]');
        controls.forEach((control) => {
            control.addEventListener('click', () => {
                const selectedLang = control.dataset.lang ?? null;
                if (isLanguage(selectedLang)) {
                    initLanguage(selectedLang);
                }
            });
        });

        document.body.dataset.languageBound = 'true';
    }

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && translations[activeLanguage][key]) {
            el.textContent = translations[activeLanguage][key];
        }
    });

    document.documentElement.lang = activeLanguage;
    document.querySelectorAll<HTMLElement>('[data-lang]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.lang === activeLanguage);
    });

    localStorage.setItem('preferred-lang', activeLanguage);
};
