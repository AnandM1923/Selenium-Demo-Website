document.addEventListener('DOMContentLoaded', () => {
    console.log('Selenium Practice Arena Loaded');

    // Highlight active link functionality
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});
