export const initSelectableGroups = () => {
  const interactiveGroups = document.querySelectorAll<HTMLElement>('[data-group]');

  interactiveGroups.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (item instanceof HTMLAnchorElement) {
        event.preventDefault();
      }

      const groupName = item.dataset.group;
      if (!groupName) return;

      const groupItems = document.querySelectorAll(`[data-group="${groupName}"]`);
      groupItems.forEach((groupItem) => groupItem.classList.remove('is-active'));
      item.classList.add('is-active');
    });
  });
};
