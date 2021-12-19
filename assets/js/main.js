
const close = document.querySelector('#icon-close');
const navMb = document.querySelector('.header_nav-list-mb')
const btnNav = document.querySelector('.header_btn')
const container = document.querySelector('.container')

function Open() {
    navMb.classList.add('open');
}
function Close() {
    navMb.classList.remove('open');
}

btnNav.addEventListener('click', Open);
close.addEventListener('click', Close)
container.addEventListener('click', Close)