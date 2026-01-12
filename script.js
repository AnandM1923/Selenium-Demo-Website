// DOM Elements
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.site-nav');

// Toggle Mobile Navigation
navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible');

    if (isVisible === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    } else {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isVisible = primaryNav.getAttribute('data-visible') === "true";
    const isClosest = e.target.closest('.site-nav');
    const isToggle = e.target.closest('.mobile-nav-toggle');

    if (isVisible && !isClosest && !isToggle) {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        console.log("Menu closed by clicking outside");
    }
});

// Smooth scroll anchor links (optional polyfill if css scroll-behavior isn't enough for some logic)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only run if it's strictly an anchor link
        if(this.getAttribute('href') !== "#") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu if open
                if(primaryNav.getAttribute('data-visible') === "true") {
                    primaryNav.setAttribute('data-visible', false);
                    navToggle.setAttribute('aria-expanded', false);
                }
            }
        }
    });
});
