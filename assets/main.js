const subMenuTitles = document.querySelectorAll('.sub-menu');
const hamburgerIcon = document.querySelector('.navigation');
const closeIcon = document.querySelector('.close-menu');
const sideMenu = document.querySelector('.side-menu');
const cover = document.querySelector('.cover');





hamburgerIcon.addEventListener ('click', showMenu);


closeIcon.addEventListener ('click', closeMenu);
cover.addEventListener ('click', closeMenu);
subMenuTitles.forEach (function(title) {
  title.addEventListener('click', showSubMenu);
});



function showMenu () {
  sideMenu.classList.add('show-side-menu');
  cover.classList.add('dark-cover');
}


function showSubMenu (e) {
  let arrow = e.currentTarget.firstElementChild.lastElementChild;
  let targetMenu = e.currentTarget.lastElementChild;
  arrow.classList.toggle('rotate');
  targetMenu.classList.toggle('show-deep-menu');
}

function closeMenu () {
  sideMenu.classList.remove('show-side-menu');
  cover.classList.remove('dark-cover');
}

