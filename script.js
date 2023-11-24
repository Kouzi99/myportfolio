document.addEventListener("touchstart", function() {}, true);

// Welcome timeout
    setTimeout(function() {
      document.getElementById('welcome-section').style.display = 'none';
    }, 3000); // 2000 milliseconds (2 seconds)


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

  