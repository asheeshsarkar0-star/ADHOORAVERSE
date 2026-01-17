const btn = document.getElementById("enterBtn");
const whisper = document.getElementById("whisper");

btn.addEventListener("click", () => {
  whisper.style.opacity = 1;

  setTimeout(() => {
    whisper.innerHTML = "Yahan shor nahi hota… sirf ehsaas hota hai.";
  }, 3000);

  setTimeout(() => {
    whisper.innerHTML = "Welcome to the luxury of being incomplete.";
  }, 6000);
});
