import './scss/main.scss';

import { initTheme } from './modules/theme';
import { initLanguage } from './modules/language';
import { initUserMenu } from './modules/menu';
import { initBurger } from './modules/burger';
import { initNewsFeed } from './modules/news';
import { initSectionMoreToggle } from './modules/section-more';
import { initSelectableGroups } from './modules/selectable-groups';
import { renderApp } from './templates/app';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = renderApp();
  initTheme();
  initLanguage();
  initUserMenu();
  initBurger();
  initNewsFeed();
  initSectionMoreToggle();
  initSelectableGroups();
}
