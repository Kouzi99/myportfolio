const themeToggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Load saved theme or use system preference
const initialTheme = localStorage.getItem('color-theme') ||
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.classList.toggle('dark', initialTheme === 'dark');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('color-theme', newTheme);
});






