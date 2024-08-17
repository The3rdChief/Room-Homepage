// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark_gray: "hsl(0, 0%, 63%)",
        vd_gray: "hsl(0, 0%, 27%)",
      },
      fontSize: {
        base: "13.5px",
      },
      screens: {
        small: "500px",
        mid: "750px",
      },
    },
    fontFamily: {
      sans: "League Spartan",
    },
  },
};

// DOM functionalities

// Handle menu toggle
// HTML
const menuOpenBtn = document.getElementById("menu-open");
const menuCloseBtn = document.getElementById("menu-close");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

// toggle function
menuOpenBtn.addEventListener("click", () => {
  nav.style.top = "0";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  document.body.style.overflowY = "hidden";
});

menuCloseBtn.addEventListener("click", () => {
  nav.style.top = "-100%";
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  document.body.style.overflowY = "auto";
});

// slider functions
// arrays

const imgArray = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

const copyArray = [
  {
    header: "Discover innovative ways to decorate",
    p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    header: "We are available all across the globe",
    p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    header: "Manufactured with the best materials",
    p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// DOM
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const imageDisplay = document.querySelector("#display-image");
const header = document.getElementById("header");
const paragraph = document.getElementById("paragraph");

// variables
let slideIndex = 0;

// function
const setAttr = (elem, attr, value) => {
  elem.setAttribute(attr, value);
};

const setContent = (elem, content) => {
  elem.textContent = content;
};

const runSlide = () => {
  setAttr(imageDisplay, "src", imgArray[slideIndex]);
  setContent(header, copyArray[slideIndex].header);
  setContent(paragraph, copyArray[slideIndex].p);
};

// run
nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex < imgArray.length) {
    runSlide();
  } else {
    slideIndex = 0;
    runSlide();
  }
});

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = imgArray.length - 1;
    runSlide();
  } else {
    runSlide();
  }
});
