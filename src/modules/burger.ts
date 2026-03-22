export const initBurger = () => {
  const burgerButtons = document.querySelectorAll<HTMLButtonElement>(".burger-btn");
  const sidebar = document.querySelector<HTMLElement>(".sidebar");
  const sidebarOverlay = document.querySelector<HTMLDivElement>(".sidebar-overlay");
  const body = document.body;

  if (!burgerButtons.length || !sidebar || !sidebarOverlay) return;

  const toggleSidebar = (isOpen: boolean) => {
    burgerButtons.forEach((button) => {
      button.classList.toggle("is-active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    });

    sidebar.classList.toggle("is-open", isOpen);
    sidebarOverlay.classList.toggle("is-visible", isOpen);
    body.style.overflow = isOpen ? "hidden" : "";
  };

  burgerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = sidebar.classList.contains("is-open");
      toggleSidebar(!isOpen);
    });
  });

  sidebarOverlay.addEventListener("click", () => toggleSidebar(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleSidebar(false);
    }
  });
};
