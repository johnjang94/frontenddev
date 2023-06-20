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
// ============= BACKGROUND AUDIO CLIPS ===========
const songs = [
  {
    title: `'Salt is My Sugar' by Marie Marie`,
    path: "bgm/salt-is-my-sugar.mp3",
  },
  { title: `'Flower' by Blackpink Jisoo`, path: "bgm/Flower.mp3" },
  {
    title: `'Never Be Alone' by The Fat Rat`,
    path: "bgm/never-be-alone.mp3",
  },
  { title: `'Yet To Come' by BTS`, path: "bgm/yet_to_come.mp3" },
  { title: `'Fake Love EDM' by BTS`, path: "bgm/Fake_Love_EDM.mp3" },
  { title: `'Stray Cats' by Stray Cats`, path: "bgm/stray-cats.mp3" },
  { title: `'Idol Remix' by BTS`, path: "bgm/idol-remix.mp3" },
  { title: `'Peaceful Piano' by Unknown`, path: "bgm/peaceful-piano.mp3" },
  {
    title: `'Let's Shut up and Dance' by Jason Derulo (ft. Lay & NCT 127)`,
    path: "bgm/lets-dance.mp3",
  },
  { title: `'LAW' by Czaer`, path: "bgm/LAW.mp3" },
  { title: `'Monoday' by The Fat Rat`, path: "bgm/monoday.mp3" },
  { title: `'The Nights' by Avicii`, path: "bgm/the-nights.mp3" },
  { title: `'Believer' by Imagine Dragon`, path: "bgm/Believer.mp3" },
  { title: `'Dance Monkey' by Tones and I`, path: "bgm/dance-monkey.mp3" },
  { title: `'Levitating' by Dua Lipa`, path: "bgm/Levitating.mp3" },
];
const randomIndex = Math.floor(Math.random() * songs.length);
let audioElement = document.getElementById("audio");
audioElement.src = songs[randomIndex].path;

let songTitle = document.getElementById("song-title");
songTitle.textContent = `${songs[randomIndex].title}`;

let currentIndex = Math.floor(Math.random() * songs.length);

audioElement.src = songs[currentIndex].path;
songTitle.textContent = songs[currentIndex].title;

audioElement.addEventListener("ended", () => {
  currentIndex = Math.floor(Math.random() * songs.length);
  audioElement.src = songs[currentIndex].path;
  songTitle.textContent = songs[currentIndex].title;
});

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
  mainContent.style.display = "none";
  audioElement.pause();
  blackCover.addEventListener("click", () => {
    mainContent.style.display = "block";
    window.scroll({ top: 0, behavior: "smooth" });
    audioElement.play();
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
// <<<<<<<<<< MY INTRODUCTION ANIMATION >>>>>>>>>
let myIntroduction = document.getElementById("myself-window");
let introductionOpenBtn = document.getElementById("myself");
const introductionCloseBtn = document.getElementsByClassName("me-close")[0];

introductionOpenBtn.onclick = function () {
  myIntroduction.style.display = "block";
  document.body.style.overflow = "hidden";
  myIntroduction.addEventListener("click", () => {
    myIntroduction.style.display = "none";
    document.body.style.overflow = "";
  });
};

introductionCloseBtn.onclick = function () {
  myIntroduction.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< FOOTBALL PROJECT ANIMATION >>>>>>>>>
let footballInformation = document.getElementById("football-window");
let footballBtn = document.getElementById("football");
const span = document.getElementsByClassName("close")[0];

footballBtn.onclick = function () {
  footballInformation.style.display = "block";
  document.body.style.overflow = "hidden";
  footballInformation.addEventListener("click", () => {
    footballInformation.style.display = "none";
    document.body.style.overflow = "";
  });
};

span.onclick = function () {
  footballInformation.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< List PROJECT ANIMATION >>>>>>>>>
let listProject = document.getElementById("list-window");
let toDoListBtn = document.getElementById("to-do-list");
let closeBtn2 = document.getElementById("to-do-list-close");

toDoListBtn.onclick = function () {
  listProject.style.display = "block";
  document.body.style.overflow = "hidden";
  listProject.addEventListener("click", () => {
    listProject.style.display = "none";
    document.body.style.overflow = "";
  });
};

closeBtn2.onclick = function () {
  listProject.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< GUESS-THE-NUMBER ANIMATION >>>>>>>>>
let guessNumberProject = document.getElementById("guess-the-number-window");
let guessNumberBtn = document.getElementById("guess-the-number");
let closeButton = document.getElementById("guess-the-number-close");

guessNumberBtn.onclick = function () {
  guessNumberProject.style.display = "block";
  document.body.style.overflow = "hidden";
  guessNumberProject.addEventListener("click", () => {
    guessNumberProject.style.display = "none";
    document.body.style.overflow = "";
  });
};

closeButton.onclick = function () {
  guessNumberProject.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< NEWS TIMES ANIMATION >>>>>>>>>
let newsTimes = document.getElementById("times-window");
let timesBtn = document.getElementById("news-times");
let timesCloseBtn = document.getElementById("times-close");

timesBtn.onclick = function () {
  newsTimes.style.display = "block";
  document.body.style.overflow = "hidden";
  newsTimes.addEventListener("click", () => {
    newsTimes.style.display = "none";
    document.body.style.overflow = "";
  });
};

timesCloseBtn.onclick = function () {
  newsTimes.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< TELEVU ANIMATION >>>>>>>>>
let companyWindow = document.getElementById("televu-window");
let companyBtn = document.getElementById("televu");
let companyCloseBtn = document.getElementById("televu-close");

companyBtn.onclick = function () {
  companyWindow.style.display = "block";
  document.body.style.overflow = "hidden";
  companyWindow.addEventListener("click", () => {
    companyWindow.style.display = "none";
    document.body.style.overflow = "";
  });
};

companyCloseBtn.onclick = function () {
  companyWindow.style.display = "none";
  document.body.style.overflow = "";
};

// <<<<<<<<<< TUGO ANIMATION >>>>>>>>>
let tugoInsurance = document.getElementById("tugo-window");
let tugoBtn = document.getElementById("tugo");
let tugoCloseBtn = document.getElementById("tugo-close");

tugoBtn.onclick = function () {
  tugoInsurance.style.display = "block";
  document.body.style.overflow = "hidden";
  tugoInsurance.addEventListener("click", () => {
    tugoInsurance.style.display = "none";
    document.body.style.overflow = "";
  });
};

tugoCloseBtn.onclick = function () {
  tugoInsurance.style.display = "none";
  document.body.style.overflow = "";
};
