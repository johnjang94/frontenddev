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
let greetingAudio = new Audio("bgm/portfolio_greeting.mp3");

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
  greetingAudio.play();
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

// // // <<<<<<<<<< EMAIL ANIMATION >>>>>>>>>
// $("#email-form").submit(function (e) {
//   e.preventDefault(); // prevent the form from submitting normally
//   const firstname = $("input[name=firstname]").val();
//   const lastname = $("input[name=lastname]").val();
//   const phone = $("input[name=phone]").val();
//   const email = $("input[name=email]").val();
//   const message = $("textarea[name=message]").val();
//   const data = {
//     firstname,
//     lastname,
//     phone,
//     email,
//     message,
//   };
//   $.post("/send-email", data, function (response) {
//     console.log(response); // log the response from the server
//     alert("Email sent successfully!");
//   });
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// const app = express();

// // create a JSON body parser
// app.use(bodyParser.json());

// // handle the email form submission
// app.post("/send-email", (req, res) => {
//   // create a transporter object
//   const transporter = nodemailer.createTransport({
//     host: "smtp.example.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "your-email@example.com",
//       pass: "your-email-password",
//     },
//   });

//   // create a mail object with the form data
//   const mail = {
//     from: "your-email@example.com",
//     to: "jscolbe9675@gmail.com",
//     subject: "New message from your website",
//     text: `Name: ${req.body.firstname} ${req.body.lastname}\nPhone: ${req.body.phone}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
//   };

//   // send the email
//   transporter.sendMail(mail, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("Email could not be sent");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.send("Email sent successfully!");
//     }
//   });
// });

// // start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
