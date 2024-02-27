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

document.addEventListener("DOMContentLoaded", function () {
    const wavePaths = document.querySelectorAll(".st1");

    wavePaths.forEach((path, index) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
    });

    // Call the function when the page is loaded
    window.onload = findPathValues;

    // Function to find and store path values
    function findPathValues() {
        // Select all path elements in the SVG
        var pathElements = document.querySelectorAll('.wave path');

        // Array to store path values
        var pathValues = [];

        // Loop through each path element and store its 'd' attribute value
        pathElements.forEach(function (path) {
            var pathValue = path.getAttribute('d');
            pathValues.push(pathValue);
        });

        // Use the pathValues array for your animation or other logic
        console.log('Path Values:', pathValues);

        // Example: You can use the path values in your animation library (e.g., Anime.js)
        // Replace this with your animation logic
        animatePathValues(pathValues);
    }

    // Example animation function using Anime.js with a simple strokeDashoffset animation
    function animatePathValues(pathValues) {
        anime({
            targets: '.wave path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 5000,
            loop: false,
            delay: function (el, i) {
                return i * 2500;
            },
            direction: 'alternate',
        });
    }
});






//routing
 