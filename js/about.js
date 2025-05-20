document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        easing: 'ease-in-out'
    });

    // Handle dropdown menu behavior
    const dropdownElementList = document.querySelectorAll('.dropdown');
    dropdownElementList.forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('mouseenter', function () {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) dropdown.classList.add('show');
        });
        dropdownToggle.addEventListener('mouseleave', function () {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) dropdown.classList.remove('show');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });
});