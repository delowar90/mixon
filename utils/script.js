// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// DROPDOWN FOR MOBILE
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    drop.addEventListener("click", () => {
        drop.classList.toggle("active");
    });
});