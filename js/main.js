try {
  // Burger Menu
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__nav");
  // const menuLinks = document.querySelectorAll(".header__nav-link");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("header__nav--active");

    if (hamburger.classList.contains("hamburger--active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
} catch (e) {}
