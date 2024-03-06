document.addEventListener("touchstart", function() {}, true);

// Welcome timeout
  // Check for first visit and welcome animation
if (localStorage.getItem('welcomeAnimationShown') !== 'true') {
  // Welcome timeout (your original code)
  setTimeout(function() {
    document.getElementById('welcome-section').style.display = 'none'; 
  }, 3000); 

  // Mark the animation as shown
  localStorage.setItem('welcomeAnimationShown', 'true');
} 


// on scroll animation 
        document.addEventListener("DOMContentLoaded", function () {
            const animatedElements = document.querySelectorAll('.animated-element');

            const observer = new IntersectionObserver(entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('in-viewport');
                        }, index * 200); // Adjust the delay as needed
                    }
                });
            }, { threshold: 0.5 });

            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });


// about me

// design

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.source === 'example.com') {
    console.log('User returned to example.com by clicking the back button');
  }
});

//routing
 const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
