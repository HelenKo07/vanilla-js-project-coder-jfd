export const initSectionMoreToggle = () => {
  const moreButton = document.querySelector<HTMLButtonElement>('.section-nav__more');

  if (!moreButton) return;

  moreButton.addEventListener('click', () => {
    const isExpanded = moreButton.getAttribute('aria-expanded') === 'true';

    moreButton.setAttribute('aria-expanded', String(!isExpanded));
    moreButton.classList.toggle('is-open', !isExpanded);
  });
};
