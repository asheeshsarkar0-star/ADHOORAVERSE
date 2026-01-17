const entry = document.getElementById("entry");
const story = document.getElementById("story");
const final = document.getElementById("final");

document.getElementById("enterBtn").addEventListener("click", () => {
  entry.classList.remove("active");
  story.classList.add("active");
});

let step = 0;

window.addEventListener("wheel", () => {
  if (!story.classList.contains("active")) return;

  step++;

  if (step > 4) {
    story.classList.remove("active");
    final.classList.add("active");
  }
});
