var themeToggleBtnLight = document.getElementById('theme-toggle-light');
var themeToggleBtnDark = document.getElementById('theme-toggle-dark');

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Function to apply the appropriate theme
function applyTheme() {
  const storedTheme = localStorage.getItem('color-theme');

  if (storedTheme === 'light') { // Prioritize saved 'light' preference
    document.documentElement.classList.remove('dark'); 
  } else if (prefersDarkMode.matches) { // Fallback to system preference
    document.documentElement.classList.add('dark'); 
  } else {
    document.documentElement.classList.remove('dark'); // Default to light
  }
}

// Function to switch and store the theme
function switchTheme(newTheme) {
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  localStorage.setItem('color-theme', newTheme); 
}

// Initial Theme Setup (on page load)
applyTheme(); 

// Event Listeners 
themeToggleBtnLight.addEventListener('click', function() {
  switchTheme('light');
});

themeToggleBtnDark.addEventListener('click', function() {
  switchTheme('dark');
});

// Listen for changes in OS preference
prefersDarkMode.addEventListener('change', applyTheme); 




const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});