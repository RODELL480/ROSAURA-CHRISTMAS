const toogleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toogleMenu.addEventListener ("click", () => {
    toogleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
})