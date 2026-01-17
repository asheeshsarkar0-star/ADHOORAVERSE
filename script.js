const scenes = document.querySelectorAll(".scene");

window.addEventListener("scroll", () => {
  scenes.forEach(scene => {
    const rect = scene.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.3) {
      scene.classList.add("active");
    } else {
      scene.classList.remove("active");
    }
  });
});
