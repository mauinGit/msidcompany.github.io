document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi EmailJS
    emailjs.init("kpZ9oAh4xyJ02goSH");

    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        statusMessage.textContent = "Mengirim...";
        statusMessage.className = "text-secondary";
        submitBtn.disabled = true;

        const templateParams = {
            from_name: document.getElementById("name").value,
            reply_to: document.getElementById("email").value,
            to_email: document.getElementById("email").value, // penerima email
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            service: document.getElementById("service").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_cwae57g", "template_xa0wch6", templateParams)
            .then(function (response) {
                statusMessage.textContent = "Pesan berhasil dikirim!";
                statusMessage.className = "text-success";
                form.reset();
                submitBtn.disabled = false;
            })
            .catch(function (error) {
                statusMessage.textContent = "Gagal mengirim. Silakan coba lagi.";
                statusMessage.className = "text-danger";
                submitBtn.disabled = false;
                console.error("EmailJS Error:", error);
            });
    });
});

// Initialize AOS
AOS.init({
    once: false,
    mirror: true,
    offset: 120,
    easing: 'ease-in-out'
});

// Enable Bootstrap dropdowns without click
document.addEventListener('DOMContentLoaded', function () {
    const dropdownElementList = document.querySelectorAll('.dropdown');
    dropdownElementList.forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('mouseenter', function (e) {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.add('show');
            }
        });
        dropdownToggle.addEventListener('mouseleave', function (e) {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        });
    });
});

// Coordinates for Universitas Sriwijaya, Indralaya
const unsriCoords = { lat: -3.2273, lng: 104.6560 };

// Initialize map
const map = L.map('map', {
    center: [unsriCoords.lat, unsriCoords.lng],
    zoom: 15,
    zoomControl: true,
});

// Add tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
}).addTo(map);

// Add marker with popup
L.marker([unsriCoords.lat, unsriCoords.lng])
    .addTo(map)
    .bindPopup('<b>Modern Solutions for Innovation & Development Headquarter</b>')
    .openPopup();