import logoUrl from '../assets/icon/logo.svg?url';
import logoBlackUrl from '../assets/icon/logo-black.svg?url'
import spriteUrl from '../assets/icon/sprite.svg?url';

export const renderApp = () => `
  <div class="page-shell">
    <div class="sidebar-overlay"></div>

    <aside class="sidebar" aria-label="Navigation">
      <div class="sidebar__top">
        <img class="sidebar__logo" src="${logoBlackUrl}" alt="META" />
        <button class="sidebar__close burger-btn burger-btn--inside" type="button" aria-label="Close menu" aria-expanded="true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="sidebar__section">
        <p class="sidebar__title" data-i18n="sidebarTitle1"></p>
        <nav class="sidebar__nav">
          <a href="#" data-i18n="sidebarCat1"></a>
          <a href="#" data-i18n="sidebarCat2"></a>
          <a href="#" data-i18n="sidebarCat3"></a>
          <a href="#" data-i18n="sidebarCat4"></a>
          <a href="#" data-i18n="sidebarCat5"></a>
          <a href="#" data-i18n="sidebarCat6"></a>
          <a href="#" data-i18n="sidebarCat7"></a>
          <a href="#" data-i18n="sidebarCat8"></a>
          <a href="#" data-i18n="sidebarCat9"></a>
          <a href="#" data-i18n="sidebarCat10"></a>
        </nav>
      </div>

      <div class="sidebar__section">
        <p class="sidebar__title" data-i18n="sidebarTitle2"></p>
        <nav class="sidebar__nav sidebar__nav--projects">
          <a href="#" data-i18n="sidebarProject1"></a>
          <a href="#" data-i18n="sidebarProject2"></a>
          <a href="#" data-i18n="sidebarProject3"></a>
          <a href="#" data-i18n="sidebarProject4"></a>
          <a href="#" data-i18n="sidebarProject5"></a>
        </nav>
      </div>

      <div class="sidebar__footer">
        <label class="theme-switch">
          <span data-i18n="sidebarTheme"></span>
          <span class="theme-switch__control">
            <input class="js-theme-switch" type="checkbox" aria-label="Switch topic" />
            <span class="theme-switch__track"></span>
          </span>
        </label>
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
              <svg><use href="${spriteUrl}#icon-search"></use></svg>
            </button>

            <button class="icon-btn icon-btn--notice" type="button" aria-label="Notifications">
              <svg><use href="${spriteUrl}#icon-notification"></use></svg>
            </button>

            <div class="user-box">
              <button class="icon-btn user-btn" type="button" aria-label="Profile" aria-expanded="false">
                <svg><use href="${spriteUrl}#icon-profile"></use></svg>
              </button>

              <div class="user-menu" aria-hidden="true">
                <a href="#">
                  <span data-i18n="menuProfile"></span>
                </a>
                <a href="#">
                  <span data-i18n="menuComments"></span>
                </a>
                <a href="#">
                  <span data-i18n="menuExit"></span>
                </a>
              </div>
            </div>

            <button class="icon-btn" type="button" aria-label="Messages">
              <svg><use href="${spriteUrl}#icon-message"></use></svg>
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
            <button class="section-nav__more" type="button">
              <span data-i18n="section11"></span>
              <svg><use href="${spriteUrl}#icon-more"></use></svg>
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
      </div>
    </main>
  </div>
`;
