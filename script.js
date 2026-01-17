/* ===== Cursor Glow ===== */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ===== Whisper Text ===== */
const btn = document.getElementById("enterBtn");
const whisper = document.getElementById("whisper");

btn.addEventListener("click", () => {
  whisper.style.opacity = 1;
  whisper.innerHTML = "Silence… is the real luxury.";

  setTimeout(() => {
    whisper.innerHTML = "Tum yahan aaye ho, kyunki tum shor se thak chuke ho.";
  }, 3500);

  setTimeout(() => {
    whisper.innerHTML = "Welcome to Adhooraverse.";
  }, 7000);
});

/* ===== Gold Particles ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 0.4 + 0.2
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(212,175,55,0.6)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y -= p.v;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(animate);
}
animate();

/* ===== Resize ===== */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
