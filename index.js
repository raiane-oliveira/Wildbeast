// Responsive menu
let showMenuToggle = true;

const menuToggle = document.querySelector(".menu-toggle");
const navHeader = document.querySelector(".header nav");

menuToggle.addEventListener("click", toggleMenu);
menuToggle.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    document.body.style.overflow = showMenuToggle ? "hidden" : "initial";

    navHeader.classList.toggle("menu-toggle-opened", showMenuToggle);
    showMenuToggle = !showMenuToggle;

    let isMenuActive = navHeader.classList.contains("menu-toggle-opened");

    event.currentTarget.setAttribute("aria-expanded", isMenuActive);
    if (isMenuActive)
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    else event.currentTarget.setAttribute("aria-label", "Abrir menu");
}
