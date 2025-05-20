// Hover dropdown on desktop
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.nav-item.dropdown');

  if (window.innerWidth >= 768 && dropdown) { // Hanya untuk layar medium ke atas
    dropdown.addEventListener('mouseenter', function () {
      this.classList.add('show');
      this.querySelector('.dropdown-menu').classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
      this.classList.remove('show');
      this.querySelector('.dropdown-menu').classList.remove('show');
    });
  }
});
