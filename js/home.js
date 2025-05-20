document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
        disable: 'mobile'
    });

    // Initialize Bootstrap Carousel
    const carouselElement = document.querySelector('#imageCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 4000,
            ride: 'carousel',
        });
    }

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    const brand = document.querySelector('.navbar-brand');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            brand.classList.remove('text-white');
        } else {
            navbar.classList.remove('scrolled');
            brand.classList.add('text-white');
        }
    }

    // Initialize navbar state on page load
    updateNavbar();

    // Update navbar on scroll
    window.addEventListener('scroll', updateNavbar);

    // Force AOS refresh on scroll to ensure animations work
    window.addEventListener('scroll', function () {
        AOS.refresh();
    });

    // Refresh AOS animations when window is resized
    window.addEventListener('resize', function () {
        AOS.refresh();
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});