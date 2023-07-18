// select
const menuButton = document.body.querySelector(".nav-menu-icon");
const menuList = document.body.querySelector(".menu-list");

// toggle menu function
const toggleMenu = () => {
  if (menuButton.classList.contains("nav-menu-icon")) {
    console.log("yes");
    menuList.classList.toggle("no-menu-list");
  } else {
    console.log("no");
  }
};

// click event
menuButton.addEventListener("click", toggleMenu);
