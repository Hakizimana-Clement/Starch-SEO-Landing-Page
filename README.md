# Starch SEO Landing Page

This web page showcases kaban for job manager, a design by <b>Arhansyah APP</b>. <br>
The resource is [Starch SEO landing page by Arhansyah APP](https://dribbble.com/shots/20700091-Starch-SEO-Landing-Page)

## Table of contents

- [Installation](#installation)
- [Overview](#overview)
  - [The task](#the-task)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Installation

To use the Kanban for job manager website locally, follow these steps:

1. Clone the repository: git clone https://github.com/Hakizimana-Clement/Starch-SEO-Landing-Page.git

2. Navigate to the project directory: cd Starch-SEO-Landing-Page.

3. Open the home page (index.html) in a web browser.

## Overview

### The Task

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- On mobile screen size, the humbuge icon needs to be interactive.
- Make button, link to have hover state.

### Links

- Github repository URL: [Starch-SEO-Landing-Page](https://github.com/Hakizimana-Clement/Starch-SEO-Landing-Page)
- Live Site URL: [Starch-SEO-Landing-Page](https://hakizimana-clement.github.io/Starch-SEO-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- css container
- javaScript

### What I learned

1. I learned how to make a navbar with javascript.<br>
   It was fun to create some classes that had no display on the page and then use javascript ClassList toggle and contains to show or hide them when the user clicked on them.

```js
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
```

2. I learned how to write media query more awesome using container from mobile friendly to desktop only using six (6) media query.

Form this:

```css
/* xs */
@media (min-width: 280px) and (max-width: 639px) {
  .container {
    max-width: 639px;
  }
}

/* sm */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

### Continued development

I’m working on making the css code more readable and DRY (don’t repeat yourself), as you can see. The code still requires more refactoring.

And also make button on faq section to work as user click on it.

### Useful resources

- [SLAYING THE DRAGON](https://www.slayingthedragon.io/) - This helped me for Know how to write media query using container. I really liked this pattern and will use it going forward.

## Author

- Github - [Hakizimana Clement](https://github.com/Hakizimana-Clement/)
- Twitter - [@HakizimanaClem5](https://www.twitter.com/HakizimanaClem5)
