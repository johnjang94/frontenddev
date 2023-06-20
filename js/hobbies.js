const video = document.querySelector("video");
const thumb = document.querySelector(".video-thumb");

video.addEventListener("play", () => {
  thumb.style.display = "none";
});
