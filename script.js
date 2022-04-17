const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const header = document.querySelector(".docs-header");
const sidebar = document.querySelector(".drawer");
const drawerArray = document.querySelectorAll(".drawer .list .list-item .link");

header.addEventListener("click", sideMenu);

function sideMenu() {
  header.classList.toggle("active");
  sidebar.classList.toggle("active");
}

drawerArray.forEach((item) => item.addEventListener("click", sideMenu));
