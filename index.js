const btnMenuMobile = document.querySelector('#btn-hamburger');
const menuOpen = document.querySelector('.nav-list-item');

btnMenuMobile.addEventListener('click', () => {
    btnMenuMobile.classList.toggle('active');
    menuOpen.classList.toggle('active');
});