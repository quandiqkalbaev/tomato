// Burger Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__nav-link");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("header__nav--active");

  if (hamburger.classList.contains("hamburger--active")) {
    document.body.classList.add("no-scroll");

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("hamburger--active");
        menu.classList.remove("header__nav--active");
        document.body.classList.remove("no-scroll");
      });
    });
  } else {
    document.body.classList.remove("no-scroll");
  }
});

//Video-player
let video = document.querySelector("#video-player"),
  progress = document.querySelector("#progress"),
  playerPlay = document.querySelector(".player__play"),
  playerProgress = document.querySelector(".player__progress"),
  playerExit = document.querySelector(".player__exit"),
  playerWindow = document.querySelector(".player__inner");

playerProgress.style.display = "none";
playerExit.style.display = "none";

function play() {
  document.body.classList.add("no-scroll");
  playerProgress.style.display = "block";
  playerExit.style.display = "block";

  playerExit.classList.add("player__exit--fixed");
  playerProgress.classList.add("player__progress--fixed");
  video.play();
}

function stop() {
  video.pause();

  playerProgress.style.display = "none";
  playerExit.style.display = "none";
  playerExit.classList.remove("player__exit--fixed");
  playerProgress.classList.remove("player__progress--fixed");

  video.currentTime = 0;
  progress.value = 0;
  video.poster = "./images/video/poster.png";
}

function progressUpdate() {
  let d = video.duration;
  let c = video.currentTime;
  if (!isNaN(d) && !isNaN(c) && isFinite(d) && isFinite(c)) {
    progress.value = (100 * c) / d;
  }
}
playerPlay.addEventListener("click", (e) => {
  video.classList.add("player__video--active");
  playerWindow.classList.add("player__inner--active");
  play();
  playerPlay.style.display = "none";
});

playerExit.addEventListener("click", () => {
  video.classList.remove("player__video--active");
  playerWindow.classList.remove("player__inner--active");
  document.body.classList.remove("no-scroll");
  video.load();
  const sectionEvent = document.querySelector("#section-event");
  if (sectionEvent) {
    sectionEvent.scrollIntoView({
      behavior: "smooth", // You can change this to "auto" for instant scrolling
      block: "start", // This aligns the top of the section with the top of the viewport
    });
  }
  stop();
  playerPlay.style.display = "block";
});
video.addEventListener("ended", () => {
  video.load();
  video.classList.remove("player__video--active");
  playerWindow.classList.remove("player__inner--active");
  document.body.classList.remove("no-scroll");

  playerPlay.style.display = "block";
  playerProgress.style.display = "none";
  playerExit.style.display = "none";
  const sectionEvent = document.querySelector("#section-event");
  if (sectionEvent) {
    sectionEvent.scrollIntoView({
      behavior: "smooth", // You can change this to "auto" for instant scrolling
      block: "start", // This aligns the top of the section with the top of the viewport
    });
  }
});
video.addEventListener("timeupdate", () => {
  progressUpdate();
});

let modals = document.querySelectorAll(".event__item"),
  eventModal = document.querySelector(".event__modal"),
  eventContent = document.querySelector(".event__content"),
  closeBtn = document.querySelector(".event__modal-close"),
  timesBtn = document.querySelector(".event__modal-times");

modals.forEach((e) => {
  e.addEventListener("click", function () {
    document.body.classList.add("no-scroll");
    eventContent.classList.add("event__content--active");
    eventModal.classList.add("event__modal--active");
  });

  closeBtn.addEventListener("click", function () {
    document.body.classList.remove("no-scroll");
    eventContent.classList.remove("event__content--active");
    eventModal.classList.remove("event__modal--active");
  });
  timesBtn.addEventListener("click", function () {
    document.body.classList.remove("no-scroll");
    eventContent.classList.remove("event__content--active");
    eventModal.classList.remove("event__modal--active");
  });
});

try {
  class Tab {
    constructor(tabSelector, contentSelector, activeTabClass, hiddenContentClass) {
      this.tabs = document.querySelectorAll(tabSelector);
      this.contents = document.querySelectorAll(contentSelector);
      this.activeTabClass = activeTabClass || "tabs__item--active";
      this.hiddenContentClass = hiddenContentClass || "hide";
      this.currentTabIndex = 0;

      this.hideTabContent();
      this.showTabContent(this.currentTabIndex);

      this.tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          this.hideTabContent();
          this.showTabContent(index);
        });
      });
    }

    hideTabContent() {
      this.contents.forEach((content) => {
        content.classList.add(this.hiddenContentClass);
        content.classList.remove("show", "fade");
      });

      this.tabs.forEach((tab) => {
        tab.classList.remove(this.activeTabClass);
      });
    }

    showTabContent(index = 0) {
      if (index >= 0 && index < this.contents.length) {
        this.contents[index].classList.add("show", "fade");
        this.contents[index].classList.remove(this.hiddenContentClass);
        this.tabs[index].classList.add(this.activeTabClass);
        this.currentTabIndex = index;
      }
    }
  }

  // Использование класса для создания табуляции
  const recipeTab = new Tab(".recipe .tabs__item", ".recipe .tabs__catalog");

  const assortmentTab = new Tab(".assortment .tabs__item", ".assortment .tabs__catalog");

  const buyTab = new Tab(".buy .tabs__item", ".buy .tabs__catalog");
} catch (e) {}

try {
  class Tab {
    constructor(sliderSelector, tabSelector, contentSelector, activeTabClass, hiddenContentClass) {
      this.sliders = document.querySelectorAll(sliderSelector);
      this.tabSelector = tabSelector;
      this.contentSelector = contentSelector;
      this.activeTabClass = activeTabClass || "r-item__tabs-item--active";
      this.hiddenContentClass = hiddenContentClass || "hide";

      this.sliders.forEach((slider) => {
        const tabs = slider.querySelectorAll(this.tabSelector);
        const contents = slider.querySelectorAll(this.contentSelector);

        tabs.forEach((tab, index) => {
          tab.addEventListener("click", () => {
            this.hideTabContent(slider);
            this.showTabContent(slider, index);
          });
        });

        this.hideTabContent(slider);
        this.showTabContent(slider, 0);
      });
    }

    hideTabContent(slider) {
      const contents = slider.querySelectorAll(this.contentSelector);

      contents.forEach((content) => {
        content.classList.add(this.hiddenContentClass);
        content.classList.remove("show", "fade");
      });

      const tabs = slider.querySelectorAll(this.tabSelector);
      tabs.forEach((tab) => {
        tab.classList.remove(this.activeTabClass);
      });
    }

    showTabContent(slider, index = 0) {
      const contents = slider.querySelectorAll(this.contentSelector);
      const tabs = slider.querySelectorAll(this.tabSelector);

      if (index >= 0 && index < contents.length) {
        contents[index].classList.add("show", "fade");
        contents[index].classList.remove(this.hiddenContentClass);
        tabs[index].classList.add(this.activeTabClass);
      }
    }
  }

  const sliderTabs = new Tab(".r-item", ".r-item__tabs-item", ".r-item__tabs-catalog");
} catch (e) {}

try {
  const assortmentSlider = new Swiper(".assortment__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    watchOverflow: true,
    spaceBetween: 15,
    navigation: {
      nextEl: ".assortment__slider-next",
      prevEl: ".assortment__slider-prev",
    },
    pagination: {
      el: ".assortment__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
} catch (e) {}

try {
  const recipeSlider = new Swiper(".recipe__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: ".recipe__slider-next",
      prevEl: ".recipe__slider-prev",
    },
    pagination: {
      el: ".recipe__slider-pagination",
      clickable: true,
    },
  });
} catch (e) {}

try {
  // Show more Ingredients
  const showMore = document.querySelectorAll(".r-item__ingredients-show-more");

  showMore.forEach((btn) => {
    btn.addEventListener("click", () => {
      const ingredientsWrapper = btn.previousElementSibling;
      ingredientsWrapper.classList.toggle("active");

      if (ingredientsWrapper.classList.contains("active")) {
        btn.textContent = "Свернуть";
      } else {
        btn.textContent = "Развернуть";
      }
    });
  });
} catch (e) {}

try {
  // Show more Cooking
  const showMore = document.querySelectorAll(".r-item__cooking-show-more");

  showMore.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cookingText = btn.previousElementSibling;
      cookingText.classList.toggle("active");

      if (cookingText.classList.contains("active")) {
        btn.textContent = "Свернуть";
      } else {
        btn.textContent = "Развернуть";
      }
    });
  });
} catch (e) {}

try {
  const tabDropdown = document.querySelectorAll(".r-item__dropdown");
  const tabs = document.querySelectorAll(".r-item__tabs");
  const tabItems = document.querySelectorAll(".tab-item");

  tabDropdown.forEach((btn) => {
    const btnText = btn.children[0];
    btn.addEventListener("click", () => {
      const tab = btn.nextElementSibling;
      btn.classList.toggle("active");
      tab.classList.toggle("active");
    });

    tabItems.forEach((item) => {
      item.addEventListener("click", () => {
        btnText.textContent = item.textContent;
        btn.classList.remove("active");
        tabs.forEach((tab) => tab.classList.remove("active"));
      });
    });
  });
} catch (e) {}

try {
  const buyBtn = document.querySelectorAll(".item__back-buy");
  const buyModal = document.querySelector(".buy-modal");
  const buyModalClose = buyModal.querySelector(".buy-modal__close");

  buyBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.add("no-scroll");
      buyModal.classList.add("buy-modal--active");
    });
  });

  buyModalClose.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    buyModal.classList.remove("buy-modal--active");
  });
} catch (e) {}
