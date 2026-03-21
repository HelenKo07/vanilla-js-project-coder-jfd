export const initBurger = () => {
  const burgerButton = document.querySelector<HTMLButtonElement>(".burger-btn");
  const sidebar = document.querySelector<HTMLElement>(".sidebar");
  const sidebarOverlay = document.querySelector<HTMLDivElement>(".sidebar-overlay");
  const body = document.body;

  if (!burgerButton || !sidebar || !sidebarOverlay) return;

  const toggleSidebar = (isOpen: boolean) => {
    burgerButton.classList.toggle("is-active", isOpen);
    sidebar.classList.toggle("is-open", isOpen);
    sidebarOverlay.classList.toggle("is-visible", isOpen);
    
    body.style.overflow = isOpen ? "hidden" : "";
    
    burgerButton.setAttribute("aria-expanded", String(isOpen));
  };

  burgerButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("is-open");
    toggleSidebar(!isOpen);
  });

  sidebarOverlay.addEventListener("click", () => toggleSidebar(false));
};
