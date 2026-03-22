import { initLanguage } from './language';

const extraDesktopNews = [
  {
    image: '/image/info-down1.webp',
    alt: 'Новость 1',
    key: 'extraNews1',
  },
  {
    image: '/image/info-down2.webp',
    alt: 'Новость 2',
    key: 'extraNews2',
  },
  {
    image: '/image/info-down3.webp',
    alt: 'Новость 3',
    key: 'extraNews3',
  },
  {
    image: '/image/info-down4.webp',
    alt: 'Новость 4',
    key: 'extraNews4',
  },
];

const extraMobileNews = [
  {
    image: '/image/info-down1.webp',
    alt: 'Новость 1',
    key: 'extraNews1',
    time: '13:00',
  },
  {
    image: '/image/info-down2.webp',
    alt: 'Новость 2',
    key: 'extraNews2',
    time: '13:10',
  },
  {
    image: '/image/info-down3.webp',
    alt: 'Новость 3',
    key: 'extraNews3',
    time: '13:20',
  },
  {
    image: '/image/info-down4.webp',
    alt: 'Новость 4',
    key: 'extraNews4',
    time: '13:35',
  },
];

export const initNewsFeed = () => {
  const moreButton = document.querySelector<HTMLButtonElement>('[data-more-news-btn]');
  const desktopFeed = document.querySelector<HTMLElement>('[data-more-feed]');
  const mobileFeed = document.querySelector<HTMLElement>('[data-mobile-feed]');

  if (!moreButton || !desktopFeed || !mobileFeed) return;

  let visibleCount = 0;

  moreButton.addEventListener('click', () => {
    const nextDesktopBatch = extraDesktopNews.slice(visibleCount, visibleCount + 2);
    const nextMobileBatch = extraMobileNews.slice(visibleCount, visibleCount + 2);

    nextDesktopBatch.forEach((item) => {
      desktopFeed.insertAdjacentHTML(
        'beforeend',
        `
          <article class="news-card news-card--side news-card--revealed">
            <img class="news-card__image" src="${item.image}" alt="${item.alt}" />
            <h3 class="news-card__title" data-i18n="${item.key}"></h3>
          </article>
        `,
      );
    });

    nextMobileBatch.forEach((item) => {
      mobileFeed.insertAdjacentHTML(
        'beforeend',
        `
          <article class="mobile-feed__item mobile-feed__item--revealed">
            <img class="mobile-feed__thumb" src="${item.image}" alt="${item.alt}" />
            <div class="mobile-feed__body">
              <span class="mobile-feed__time">${item.time}</span>
              <a href="#" class="mobile-feed__title" data-i18n="${item.key}"></a>
            </div>
          </article>
        `,
      );
    });

    visibleCount += nextDesktopBatch.length;
    initLanguage();

    if (visibleCount >= extraDesktopNews.length) {
      moreButton.disabled = true;
      moreButton.classList.add('is-disabled');
    }
  });
};
