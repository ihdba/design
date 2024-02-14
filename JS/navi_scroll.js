const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')


toggleBtn.onclick = function (){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


const header = document.querySelector('#header');
let lastScrollY = window.screenY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("nav--hidden");
    }
    else {
        header.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});