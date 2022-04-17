const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log("hi");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
