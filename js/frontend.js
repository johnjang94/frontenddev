// ============ DARK INITIAL COVER ===============
let blackCover = document.getElementById("black-cover");
let coverTitle = document.getElementById("cover-title");
let subtitle = document.getElementById("subtitle");
let downArrow = document.querySelector(".down-arrow");
let clickMessage = document.querySelector(".click");
// ============ MAIN BODY CONTENT ================
const mainContent = document.getElementById("main-content");
let mainNavigation = document.querySelector(".navigation-header");
let profile = document.getElementById("profile-introduction");
let backgroundAudio = document.getElementById("background-audio");
let greetingAudio = new Audio("../bgm/portfolio_greeting.mp3");

blackCover.addEventListener("click", () => {
  blackCover.style.transform = "translateY(-700px)";
  blackCover.style.transition = "all 2s ease-out";
  blackCover.style.opacity = 0;

  mainNavigation.style.display = "none";
  profile.style.display = "none";

  setTimeout(() => {
    if (blackCover.style.opacity == 0) {
      blackCover.style.display = "none";
      coverTitle.style.display = "none";
      subtitle.style.display = "none";
      downArrow.style.display = "none";

      mainNavigation.style.display = "flex";
      profile.style.display = "block";
    }
  }, 1700);
});

downArrow.addEventListener("click", () => {
  blackCover.style.transform = "translateY(-700px)";
  blackCover.style.opacity = "0";
  blackCover.style.transition = "all 2s ease-out";
});

const display = () => {
  subtitle.style.display = "block";
  clickMessage.style.display = "block";
  coverTitle.addEventListener("animationend", () => {
    setTimeout(() => {
      coverTitle.style.marginTop = "-70px";
      coverTitle.style.transform = "translateY(10px)";
      coverTitle.style.transition = "all 1s ease-in-out";
      subtitle.style.opacity = 1;
      subtitle.style.transition = "all 1s ease-in";
    }, 500);

    setTimeout(() => {
      downArrow.style.display = "block";
      downArrow.style.opacity = "1";
      downArrow.style.transition = "all 1s fade-in";
      clickMessage.style.transition = "all 1s ease-in";
      clickMessage.style.opacity = 1;
      clickMessage.style.marginTop = "250px";
    }, 2000);
  });
};

addEventListener("DOMContentLoaded", () => {
  display();
  greetingAudio.play();
  backgroundAudio.pause();
  mainContent.style.display = "none";
  blackCover.addEventListener("click", () => {
    mainContent.style.display = "block";
    backgroundAudio.play();
    window.scroll({ top: 0, behavior: "smooth" });
  });
});

// ======== MOBILE DROP-DOWN MENU ========
let mobileNav = document.querySelector(".topnav");
let navMenu = document.querySelector(".nav-menu");
let activeLink = document.querySelector(".active");
let links = document.getElementById("nav-links");
let closeBtn = document.querySelector(".x-button");

navMenu.addEventListener("click", () => {
  links.style.display = "block";
  navMenu.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  links.style.display = "none";
  navMenu.style.display = "block";
  closeBtn.style.display = "none";
});

// ======== MAIN CONTENT ANIMATION ========
let responsiveDesignTag = document.querySelector(".responsiveness");
let profileSection = document.querySelector(".profile-section");
let slide = document.getElementById("slide-color");

const introAnimation = () => {
  if (responsiveDesignTag.scrollIntoView()) {
    responsiveDesignTag.style.animation = "font-changes";
  }

  if (profileSection.scrollIntoView()) {
    slide.style.display = "block";
    slide.addEventListener("animationend", () => {
      slide.style.color = "black";
    });
  }
};

//======== MAIN CONTENT PROJECTS ANIMATION ========
// <<<<<<<<<< FOOTBALL PROJECT ANIMATION >>>>>>>>>
let footballInformation = document.getElementById("football-window");
let footballBtn = document.getElementById("football");
const span = document.getElementsByClassName("close")[0];

footballBtn.onclick = function () {
  footballInformation.style.display = "block";
};

span.onclick = function () {
  footballInformation.style.display = "none";
};

// <<<<<<<<<< List PROJECT ANIMATION >>>>>>>>>
let listProject = document.getElementById("list-window");
let toDoListBtn = document.getElementById("to-do-list");
let closeBtn2 = document.getElementById("to-do-list-close");

toDoListBtn.onclick = function () {
  listProject.style.display = "block";
};

closeBtn2.onclick = function () {
  listProject.style.display = "none";
};

// <<<<<<<<<< GUESS-THE-NUMBER ANIMATION >>>>>>>>>
let guessNumberProject = document.getElementById("guess-the-number-window");
let guessNumberBtn = document.getElementById("guess-the-number");
let closeButton = document.getElementById("guess-the-number-close");

guessNumberBtn.onclick = function () {
  guessNumberProject.style.display = "block";
};

closeButton.onclick = function () {
  guessNumberProject.style.display = "none";
};

// <<<<<<<<<< NEWS TIMES ANIMATION >>>>>>>>>
let newsTimes = document.getElementById("times-window");
let timesBtn = document.getElementById("news-times");
let timesCloseBtn = document.getElementById("times-close");

timesBtn.onclick = function () {
  newsTimes.style.display = "block";
};

timesCloseBtn.onclick = function () {
  newsTimes.style.display = "none";
};
