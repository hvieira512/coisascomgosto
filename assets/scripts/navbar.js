const icon = document.getElementById("nav__icon");
const links = document.getElementById("nav__links");

icon.addEventListener('click', () => {
    links.classList.toggle("expanded")
})
