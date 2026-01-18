const loader = document.getElementById("loader");
const entry = document.getElementById("entry");
const nameScreen = document.getElementById("nameScreen");
const story = document.getElementById("story");
const final = document.getElementById("final");

const enterBtn = document.getElementById("enterBtn");
const continueBtn = document.getElementById("continueBtn");

const username = document.getElementById("username");
const finalText = document.getElementById("finalText");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

setTimeout(() => {
  loader.style.display = "none";
  entry.classList.remove("hidden");
}, 2000);

enterBtn.onclick = () => {
  entry.classList.add("hidden");
  nameScreen.classList.remove("hidden");
};

continueBtn.onclick = () => {
  const name = username.value || "Traveler";
  nameScreen.classList.add("hidden");
  story.classList.remove("hidden");

  finalText.innerHTML = `
    ${name}…<br><br>
    tum adhure isliye nahi ho,<br>
    kyunki tumhare paas kuch kam hai,<br><br>
    balki isliye…<br>
    kyunki tum gehra mehsoos karte ho.
  `;
};

let scrollCount = 0;

window.addEventListener("wheel", () => {
  if (!story.classList.contains("hidden")) {
    scrollCount++;
    if (scrollCount > 3) {
      story.classList.add("hidden");
      final.classList.remove("hidden");
    }
  }
});

musicBtn.onclick = () => {
  music.paused ? music.play() : music.pause();
};
