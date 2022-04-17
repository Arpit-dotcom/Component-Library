const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const header = document.querySelector(".docs-header");
const sidebar = document.querySelector(".drawer");

header.addEventListener("click", sideMenu);

function sideMenu() {
  header.classList.toggle("active");
  sidebar.classList.toggle("active");
}