var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var isMenuOpen = false;
function toggleMenu() {
  if (!menuButton.firstElementChild.classList.contains('hidden')) {
    isMenuOpen = true;
    menuButton.lastElementChild.classList.remove('hidden');
    menuButton.firstElementChild.classList.add('hidden');
    openMenu()
  }
  else {
    isMenuOpen = false
    menuButton.lastElementChild.classList.add('hidden');
    menuButton.firstElementChild.classList.remove('hidden');
    closeMenu()
  }
}

function openMenu() {
  menu.classList.remove('hidden')
}
function closeMenu() {
  menu.classList.add('hidden')
}