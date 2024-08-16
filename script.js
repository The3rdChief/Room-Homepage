// Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark_gray: "hsl(0, 0%, 63%)",
        vd_gray: "hsl(0, 0%, 27%)",
      },
      fontSize: {
        base: "12px",
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

// toggle function
menuOpenBtn.addEventListener("click", () => {
  nav.style.top = "0";
});

menuCloseBtn.addEventListener("click", () => {
  nav.style.top = "-100%";
});
