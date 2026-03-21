import './scss/main.scss'

import { initTheme } from './modules/theme';
import { initLanguage } from './modules/language';
import { initUserMenu } from './modules/menu';
import { initBurger } from './modules/burger';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initUserMenu();
  initBurger();
});

