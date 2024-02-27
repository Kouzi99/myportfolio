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




//routing
 