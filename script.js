const btn = document.getElementById("enterBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.style.opacity = 1;

  setTimeout(() => {
    msg.innerHTML = "Tum jawab nahi… bas ehsaas dhoondhne aaye ho.";
  }, 3000);

  setTimeout(() => {
    msg.innerHTML = "Welcome to the Adhooraverse.";
  }, 6000);
});
