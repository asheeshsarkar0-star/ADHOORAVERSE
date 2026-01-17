const continueBtn = document.getElementById("continueBtn");
const usernameInput = document.getElementById("username");
const personalText = document.getElementById("personalText");
const scenes = document.querySelectorAll(".scene");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

continueBtn.addEventListener("click", () => {
  const name = usernameInput.value || "Traveler";

  scenes[0].classList.remove("active");
  scenes[1].classList.add("active");

  personalText.innerHTML = `
    ${name}…<br><br>
    tum adhure isliye nahi ho<br>
    kyunki tumhare paas kuch kam hai,<br><br>
    balki isliye…<br>
    kyunki tum gehra mehsoos karte ho.
  `;
});

musicBtn.addEventListener("click", () => {
  music.play();
  scenes[1].classList.remove("active");
  scenes[2].classList.add("active");
});
