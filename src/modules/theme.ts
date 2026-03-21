export const initTheme = () => {
  const themeToggle = document.querySelector<HTMLInputElement>('.js-theme-switch');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeToggle) themeToggle.checked = true;
  }

  themeToggle?.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
};