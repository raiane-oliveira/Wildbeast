// Responsive menu
let show = true;

const menuHamburger = document.querySelector(".menu-hamburger");
const navHeader = document.querySelector(".header nav");

menuHamburger.addEventListener("click", toggleMenu);
menuHamburger.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    document.body.style.overflow = show ? "hidden" : "initial";
    navHeader.classList.toggle("active-menu-burger", show);
    show = !show;

    const isMenuBurgerActive =
        navHeader.classList.contains("active-menu-burger");

    event.currentTarget.setAttribute("aria-expanded", isMenuBurgerActive);
    if (isMenuBurgerActive)
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    else event.currentTarget.setAttribute("aria-label", "Abrir menu");
}
