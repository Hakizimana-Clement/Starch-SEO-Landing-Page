// select
const menuButton = document.body.querySelector(".nav-menu-icon");
const menuList = document.body.querySelector(".menu-list");
const faq = document.body.querySelector(".faq-section__title");
const faqParagraph = document.body.querySelector(".faq-section__paragraph");
// icon
const minusIcon = document.body.querySelector(".minus-icon");
const addIcon = document.body.querySelector(".add-icon");
const icons = document.body.querySelector(".faq-section__icon");
// toggle menu function
const toggleMenu = () => {
  if (menuButton.classList.contains("nav-menu-icon")) {
    menuList.classList.toggle("no-menu-list");
  }
};
// click event
menuButton.addEventListener("click", toggleMenu);

const toggleFaq = () => {
  console.log("yes");
  if (faq.classList.contains("faq-section__title")) {
    console.log("Yes");
    faqParagraph.classList.toggle("faq-section__no-paragraph");
    minusIcon.classList.toggle("minus-icon");
    addIcon.classList.toggle("add-no-icon");
  } else {
    console.log("No");
  }
};

faq.addEventListener("click", toggleFaq);
