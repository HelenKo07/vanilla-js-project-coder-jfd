import logoUrl from '../assets/icon/logo.svg?url';
import logoBlackUrl from '../assets/icon/logo-black.svg?url';
import spriteUrl from '../assets/icon/sprite.svg?url';

export const renderApp = () => `
  <div class="page-shell">
    <div class="sidebar-overlay"></div>

    <aside class="sidebar" aria-label="Navigation">
      <div class="sidebar__top">
        <div class="sidebar__logo-wrap" aria-label="META">
          <img class="sidebar__logo sidebar__logo--light" src="${logoBlackUrl}" alt="META" />
          <img class="sidebar__logo sidebar__logo--dark" src="${logoUrl}" alt="META" />
        </div>
        <button class="sidebar__close burger-btn burger-btn--inside" type="button" aria-label="Close menu" aria-expanded="true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="sidebar__section">
        <p class="sidebar__title" data-i18n="sidebarTitle1"></p>
        <nav class="sidebar__nav">
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat1"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat2"></a>
          <a href="#" class="is-active" data-group="sidebar-cats" data-i18n="sidebarCat3"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat4"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat5"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat6"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat7"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat8"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat9"></a>
          <a href="#" data-group="sidebar-cats" data-i18n="sidebarCat10"></a>
        </nav>
      </div>

      <div class="sidebar__section">
        <p class="sidebar__title" data-i18n="sidebarTitle2"></p>
        <nav class="sidebar__nav sidebar__nav--projects">
          <a href="#" data-group="sidebar-projects" data-i18n="sidebarProject1"></a>
          <a href="#" data-group="sidebar-projects" data-i18n="sidebarProject2"></a>
          <a href="#" data-group="sidebar-projects" data-i18n="sidebarProject3"></a>
          <a href="#" data-group="sidebar-projects" data-i18n="sidebarProject4"></a>
          <a href="#" data-group="sidebar-projects" data-i18n="sidebarProject5"></a>
        </nav>
      </div>

      <div class="sidebar__footer">
        <label class="sidebar__tool theme-switch">
          <span data-i18n="sidebarTheme"></span>
          <span class="theme-switch__control">
            <input class="js-theme-switch" type="checkbox" aria-label="Switch topic" />
            <span class="theme-switch__track"></span>
          </span>
        </label>

        <div class="sidebar__tool sidebar__tool--language">
          <span data-i18n="sidebarText"></span>
          <div class="sidebar-lang" aria-label="Language switch">
            <button class="sidebar-lang__btn is-active" type="button" data-lang="ua">UA</button>
            <button class="sidebar-lang__btn" type="button" data-lang="ru">RU</button>
          </div>
        </div>
      </div>
    </aside>

    <header class="site-header">
      <div class="site-header__top">
        <div class="container site-header__top-row">
          <div class="site-header__brand">
            <button class="burger-btn" type="button" aria-label="Open menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <a class="site-header__logo" href="#" aria-label="META">
              <img src="${logoUrl}" alt="META" />
            </a>

            <nav class="site-header__top-nav" aria-label="Quick Sections">
              <a href="#" class="nav-link nav-link--accent is-active" data-group="top-nav" data-i18n="headerTop1"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop2"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop3"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop4"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop5"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop6"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop7"></a>
              <a href="#" class="nav-link nav-link--accent" data-group="top-nav" data-i18n="headerTop8"></a>
            </nav>
          </div>

          <div class="site-header__actions">
            <div class="lang-switch" aria-label="Language switch">
              <button class="lang-switch__btn is-active" type="button" data-lang="ua">UA</button>
              <button class="lang-switch__btn" type="button" data-lang="ru">RU</button>
            </div>

            <button class="icon-btn" type="button" aria-label="Search">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M31.781 30.1l-8.063-8.063c-0.144-0.144-0.331-0.219-0.531-0.219h-0.644c2.144-2.319 3.456-5.412 3.456-8.819 0-7.181-5.819-13-13-13s-13 5.819-13 13c0 7.181 5.819 13 13 13 3.406 0 6.5-1.312 8.819-3.45v0.637c0 0.2 0.081 0.388 0.219 0.531l8.063 8.063c0.294 0.294 0.769 0.294 1.063 0l0.619-0.619c0.294-0.294 0.294-0.769 0-1.063zM13 24c-6.081 0-11-4.919-11-11s4.919-11 11-11c6.081 0 11 4.919 11 11s-4.919 11-11 11z" />
              </svg>
            </button>

            <button class="icon-btn icon-btn--notice" type="button" aria-label="Notifications">
              <svg viewBox="0 0 27 32" aria-hidden="true">
                <path fill="currentColor" d="M0 27.152h25.785v-2.002h-3.397v-12.755c0-2.276-0.701-4.296-2.103-6.058-1.394-1.753-3.193-2.841-5.397-3.262v-1.162c0-0.565-0.191-1.027-0.575-1.382-0.383-0.354-0.857-0.531-1.421-0.531s-1.038 0.176-1.421 0.531c-0.384 0.355-0.575 0.817-0.575 1.382v1.162c-2.203 0.422-3.996 1.51-5.376 3.263-1.388 1.763-2.082 3.783-2.082 6.058v12.755h-3.439v2.002zM9.861 28.921h6.062v0.048c0 0.841-0.295 1.558-0.884 2.147s-1.306 0.884-2.147 0.884c-0.814 0-1.523-0.295-2.126-0.884s-0.905-1.306-0.905-2.147v-0.048zM20.386 25.151h-14.986v-12.755c0-2.087 0.727-3.863 2.182-5.332s3.238-2.203 5.352-2.203c2.087 0 3.849 0.734 5.29 2.202s2.162 3.245 2.162 5.332v12.755z" />
              </svg>
            </button>

            <div class="user-box">
              <button class="icon-btn user-btn" type="button" aria-label="Profile" aria-expanded="false">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path fill="currentColor" d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM24.258 27.2c-2.316 1.71-5.168 2.736-8.258 2.736s-5.942-1.026-8.258-2.736v-0.877c0-2.277 1.852-4.129 4.129-4.129 0.716 0 1.774 0.735 4.129 0.735 2.361 0 3.406-0.735 4.129-0.735 2.277 0 4.129 1.852 4.129 4.129v0.877zM26.232 25.426c-0.439-2.993-2.987-5.297-6.103-5.297-1.323 0-1.961 0.736-4.129 0.736s-2.8-0.736-4.129-0.736c-3.116 0-5.665 2.303-6.103 5.297-2.29-2.484-3.703-5.787-3.703-9.426 0-7.684 6.252-13.935 13.935-13.935s13.936 6.252 13.936 13.935c0 3.639-1.413 6.942-3.703 9.426zM16 7.226c-3.136 0-5.677 2.542-5.677 5.677s2.542 5.677 5.677 5.677c3.136 0 5.677-2.542 5.677-5.677s-2.542-5.677-5.677-5.677zM16 16.516c-1.994 0-3.613-1.619-3.613-3.613s1.619-3.613 3.613-3.613c1.994 0 3.613 1.619 3.613 3.613s-1.619 3.613-3.613 3.613z" />
                </svg>
              </button>

              <div class="user-menu" aria-hidden="true">
                <a href="#">
                  <span data-i18n="menuProfile"></span>
                </a>
                <a href="#">
                  <span data-i18n="menuComments"></span>
                </a>
                <a href="#" class="user-menu__exit">
                  <span data-i18n="menuExit"></span>
                  <svg aria-hidden="true"><use href="${spriteUrl}#icon-exit"></use></svg>
                </a>
              </div>
            </div>

            <button class="icon-btn" type="button" aria-label="Messages">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path fill="currentColor" d="M29 4h-26c-1.656 0-3 1.344-3 3v18c0 1.656 1.344 3 3 3h26c1.656 0 3-1.344 3-3v-18c0-1.656-1.344-3-3-3zM3 6h26c0.55 0 1 0.45 1 1v2.588c-1.369 1.156-3.325 2.75-9.412 7.581-1.056 0.837-3.138 2.856-4.588 2.831-1.45 0.025-3.537-1.994-4.588-2.831-6.088-4.831-8.044-6.425-9.412-7.581v-2.588c0-0.55 0.45-1 1-1zM29 26h-26c-0.55 0-1-0.45-1-1v-12.813c1.425 1.169 3.675 2.975 8.169 6.544 1.281 1.025 3.544 3.281 5.831 3.269 2.275 0.019 4.519-2.219 5.831-3.269 4.494-3.569 6.744-5.375 8.169-6.544v12.813c0 0.55-0.45 1-1 1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="site-header__bottom">
        <div class="container">
          <nav class="section-nav" aria-label="Main headings">
            <a href="#" class="section-nav__link is-active" data-group="section-nav" data-i18n="section1"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section2"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section3"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section4"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section5"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section6"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section7"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section8"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section9"></a>
            <a href="#" class="section-nav__link" data-group="section-nav" data-i18n="section10"></a>
            <button class="section-nav__more" type="button" aria-expanded="false">
              <span data-i18n="section11"></span>
              <svg viewBox="0 0 55 32" aria-hidden="true">
                <path fill="currentColor" d="M53.795 2.856l-2.424-2.425c-0.576-0.576-1.506-0.576-2.082 0l-22.175 22.127-22.176-22.127c-0.575-0.576-1.506-0.576-2.082 0l-2.425 2.425c-0.576 0.575-0.576 1.506 0 2.082l25.641 25.641c0.576 0.576 1.506 0.576 2.082 0l25.641-25.641c0.576-0.575 0.576-1.506 0-2.082z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <main class="page-main">
      <div class="container">
        <section class="topic-chips" aria-label="Hot topics">
          <button class="topic-chips__item is-active" type="button" data-group="topic-chip">
            <svg><use href="${spriteUrl}#icon-info"></use></svg>
            <span data-i18n="tag1"></span>
          </button>
          <button class="topic-chips__item" type="button" data-group="topic-chip">
            <svg><use href="${spriteUrl}#icon-info"></use></svg>
            <span data-i18n="tag2"></span>
          </button>
          <button class="topic-chips__item" type="button" data-group="topic-chip">
            <svg><use href="${spriteUrl}#icon-info"></use></svg>
            <span data-i18n="tag3"></span>
          </button>
          <button class="topic-chips__item" type="button" data-group="topic-chip">
            <svg><use href="${spriteUrl}#icon-info"></use></svg>
            <span data-i18n="tag4"></span>
          </button>
          <button class="topic-chips__item" type="button" data-group="topic-chip">
            <svg><use href="${spriteUrl}#icon-info"></use></svg>
            <span data-i18n="tag5"></span>
          </button>

          <div class="weather-chip" aria-label="Weather summary">
            <span class="weather-chip__city" data-i18n="weatherCityChip"></span>
            <span class="weather-chip__divider" aria-hidden="true"></span>
            <span class="weather-chip__status" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                  <path d="M12 1.5v3" />
                  <path d="M12 19.5v3" />
                  <path d="M1.5 12h3" />
                  <path d="M19.5 12h3" />
                  <path d="m4.6 4.6 2.1 2.1" />
                  <path d="m17.3 17.3 2.1 2.1" />
                  <path d="m17.3 6.7 2.1-2.1" />
                  <path d="m4.6 19.4 2.1-2.1" />
                </g>
              </svg>
              <span class="weather-chip__temp">+14°</span>
            </span>
          </div>
        </section>

        <section class="news-layout">
          <aside class="news-stream">
            <h2 class="news-stream__title" data-i18n="mainTitle"></h2>

            <ul class="news-stream__list">
              <li class="news-stream__item">
                <span class="news-stream__time">08:30</span>
                <a href="#" class="news-stream__link" data-i18n="left1"></a>
              </li>
              <li class="news-stream__item">
                <span class="news-stream__time">08:45</span>
                <a href="#" class="news-stream__link" data-i18n="left2"></a>
              </li>
              <li class="news-stream__item">
                <span class="news-stream__time">09:30</span>
                <a href="#" class="news-stream__link" data-i18n="left3"></a>
              </li>
              <li class="news-stream__item">
                <span class="news-stream__time">10:20</span>
                <a href="#" class="news-stream__link news-stream__link--accent" data-i18n="left4"></a>
              </li>
              <li class="news-stream__item">
                <span class="news-stream__time">10:20</span>
                <a href="#" class="news-stream__link" data-i18n="left5"></a>
              </li>
              <li class="news-stream__item">
                <span class="news-stream__time">10:20</span>
                <a href="#" class="news-stream__link" data-i18n="left6"></a>
              </li>
            </ul>
          </aside>

          <h2 class="news-stream__title news-stream__title--mobile" data-i18n="mainTitle"></h2>

          <article class="hero-card news-card">
            <picture>
              <source media="(max-width: 1023px)" srcset="/image/main-mobile.webp 1x, /image/main-mobile2@2x.webp 2x" />
              <source media="(min-width: 1024px)" srcset="/image/main-desktop.webp 1x, /image/main-desktop@2x.webp 2x" />
              <img class="hero-card__image" src="/image/main-desktop.webp" alt="Главная новость" />
            </picture>
            <div class="hero-card__content">
              <h1 class="hero-card__title" data-i18n="heroTitle"></h1>
              <p class="hero-card__text" data-i18n="heroText"></p>
            </div>
          </article>

          <aside class="side-feed" data-more-feed aria-label="Other news">
            <article class="news-card news-card--side">
              <img class="news-card__image" src="/image/info-right.webp" alt="Weather" />
              <h3 class="news-card__title" data-i18n="rightFeatured"></h3>
            </article>

            <article class="news-card news-card--side">
              <img class="news-card__image" src="/image/info-right2.webp" alt="Harvest" />
              <h3 class="news-card__title" data-i18n="rightSecondary"></h3>
            </article>
          </aside>

          <section class="mobile-feed" data-mobile-feed aria-label="Mobile feed">
            <article class="mobile-feed__item">
              <img class="mobile-feed__thumb" src="/image/info-down1.webp" alt="Sport" />
              <div class="mobile-feed__body">
                <span class="mobile-feed__time">12:30</span>
                <a href="#" class="mobile-feed__title" data-i18n="left3"></a>
              </div>
            </article>

            <article class="mobile-feed__item">
              <img class="mobile-feed__thumb" src="/image/info-down2.webp" alt="Tennis" />
              <div class="mobile-feed__body">
                <span class="mobile-feed__time">12:40</span>
                <a href="#" class="mobile-feed__title" data-i18n="left4"></a>
              </div>
            </article>

            <article class="mobile-feed__item">
              <img class="mobile-feed__thumb" src="/image/info-down3.webp" alt="Policy" />
              <div class="mobile-feed__body">
                <span class="mobile-feed__time">12:40</span>
                <a href="#" class="mobile-feed__title" data-i18n="left5"></a>
              </div>
            </article>

            <article class="mobile-feed__item">
              <img class="mobile-feed__thumb" src="/image/info-down4.webp" alt="Coronavirus" />
              <div class="mobile-feed__body">
                <span class="mobile-feed__time">12:40</span>
                <a href="#" class="mobile-feed__title" data-i18n="left4"></a>
              </div>
            </article>

            <article class="mobile-feed__item">
              <img class="mobile-feed__thumb" src="/image/info-down5.webp" alt="Medicine" />
              <div class="mobile-feed__body">
                <span class="mobile-feed__time">12:40</span>
                <a href="#" class="mobile-feed__title" data-i18n="left6"></a>
              </div>
            </article>
          </section>
        </section>

        <div class="page-main__footer">
          <button class="more-btn" type="button" data-more-news-btn>
            <span data-i18n="moreNews"></span>
            <svg><use href="${spriteUrl}#icon-arrow"></use></svg>
          </button>
        </div>

        <section class="weather-card weather-card--desktop" aria-label="Weather forecast">
          <div class="weather-card__head">
            <h2 class="weather-card__title" data-i18n="weatherTitle"></h2>
            <svg class="weather-card__pin" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21s7-6.12 7-11a7 7 0 1 0-14 0c0 4.88 7 11 7 11z"
              />
              <circle cx="12" cy="10" r="2.7" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>

          <div class="weather-card__body">
            <div class="weather-card__summary">
              <p class="weather-card__temp">+14°</p>
              <div class="weather-card__status" aria-hidden="true">
                <svg class="weather-card__cloud" viewBox="0 0 54 40">
                  <path
                    fill="#9ec7ff"
                    d="M17 32c-6.6 0-12-4.9-12-11 0-5.7 4.7-10.4 10.8-11 1.7-5.5 6.9-9.5 13.2-9.5 7.7 0 14 5.9 14.7 13.4 5.1.9 9.1 5.2 9.1 10.4 0 5.9-5 10.7-11.1 10.7z"
                  />
                </svg>
                <svg class="weather-card__rain" viewBox="0 0 16 20">
                  <path fill="#58a8ff" d="M8 0c3.1 4.6 5.8 8.2 5.8 12A5.8 5.8 0 1 1 2.2 12C2.2 8.2 4.9 4.6 8 0z" />
                </svg>
                <svg class="weather-card__bolt" viewBox="0 0 20 28">
                  <path fill="#ffd33d" d="M12.5 0 2 15h6l-1.3 13L18 11h-6.2z" />
                </svg>
              </div>
            </div>

            <div class="weather-card__periods">
              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherMorning"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherDay"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherEvening"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherNight"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section class="weather-card" aria-label="Weather forecast">
          <div class="weather-card__head">
            <h2 class="weather-card__title" data-i18n="weatherTitle"></h2>
            <svg class="weather-card__pin" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21s7-6.12 7-11a7 7 0 1 0-14 0c0 4.88 7 11 7 11z"
              />
              <circle cx="12" cy="10" r="2.7" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>

          <div class="weather-card__body">
            <div class="weather-card__summary">
              <p class="weather-card__temp">+14°</p>
              <div class="weather-card__status" aria-hidden="true">
                <svg class="weather-card__cloud" viewBox="0 0 54 40">
                  <path
                    fill="#9ec7ff"
                    d="M17 32c-6.6 0-12-4.9-12-11 0-5.7 4.7-10.4 10.8-11 1.7-5.5 6.9-9.5 13.2-9.5 7.7 0 14 5.9 14.7 13.4 5.1.9 9.1 5.2 9.1 10.4 0 5.9-5 10.7-11.1 10.7z"
                  />
                </svg>
                <svg class="weather-card__rain" viewBox="0 0 16 20">
                  <path fill="#58a8ff" d="M8 0c3.1 4.6 5.8 8.2 5.8 12A5.8 5.8 0 1 1 2.2 12C2.2 8.2 4.9 4.6 8 0z" />
                </svg>
                <svg class="weather-card__bolt" viewBox="0 0 20 28">
                  <path fill="#ffd33d" d="M12.5 0 2 15h6l-1.3 13L18 11h-6.2z" />
                </svg>
              </div>
            </div>

            <div class="weather-card__periods">
              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherMorning"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherDay"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherEvening"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>

              <div class="weather-card__period">
                <span class="weather-card__label" data-i18n="weatherNight"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="#ffd33d" />
                  <g stroke="#ffd33d" stroke-linecap="round" stroke-width="2">
                    <path d="M12 1.5v3" />
                    <path d="M12 19.5v3" />
                    <path d="M1.5 12h3" />
                    <path d="M19.5 12h3" />
                    <path d="m4.6 4.6 2.1 2.1" />
                    <path d="m17.3 17.3 2.1 2.1" />
                    <path d="m17.3 6.7 2.1-2.1" />
                    <path d="m4.6 19.4 2.1-2.1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
`;
