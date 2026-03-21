export const initUserMenu = () => {
    const userBtn = document.querySelector<HTMLButtonElement>('.user-btn');
    const userMenu = document.querySelector<HTMLDivElement>('.user-menu');

    if (!userBtn || !userMenu) return;

    const toggleMenu = (isOpen: boolean) => {
        userBtn.setAttribute('aria-expanded', String(isOpen));
        userMenu.setAttribute('aria-hidden', String(!isOpen));
        userMenu.classList.toggle('is-active', isOpen);
    };

    userBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = userBtn.getAttribute('aria-expanded') === 'true';
        toggleMenu(!isOpen);
    });

    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!userMenu.contains(target) && !userBtn.contains(target)) {
            toggleMenu(false);
        }
    });
};