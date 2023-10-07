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

//Video-player
let video = document.querySelector("#video-player"),
  progress = document.querySelector("#progress"),
  playerPlay = document.querySelector(".player__play"),
  playerExit = document.querySelector(".player__exit"),
  playerWindow = document.querySelector(".player__inner");

progress.style.display = "none";

function play() {
  progress.style.display = "block";
  video.play();
}

function stop() {
  video.pause();
  progress.style.display = "none";
  video.currentTime = 0;
  progress.value = 0;
  video.poster = "./images/video/poster.png";
}

function progressUpdate() {
  let d = video.duration;
  let c = video.currentTime;
  progress.value = (100 * c) / d;
}
playerPlay.addEventListener("click", (e) => {
  video.classList.add('player__video--active')
  play();
  playerPlay.style.display = "none";
});

playerExit.addEventListener("click", () => {
  video.classList.remove('player__video--active')
  stop();
  playerPlay.style.display = "block";
});
video.addEventListener("ended", () => {
  video.classList.remove('player__video--active')
  playerPlay.style.display = "block";
  progress.style.display = "none";
});
video.addEventListener("timeupdate", () => {
  progressUpdate();
});

//Event-modal

let modals = document.querySelectorAll(".event__item"),
  eventModal = document.querySelector(".event__modal"),
  closeBtn = document.querySelector(".event__modal-close"),
  timesBtn = document.querySelector(".event__modal-times");

modals.forEach((e) => {
  e.addEventListener("click", function () {
    eventModal.style.display = "block";
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", function () {
    eventModal.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
  timesBtn.addEventListener("click", function () {
    eventModal.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});
