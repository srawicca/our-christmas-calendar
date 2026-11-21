
(() => {
  const music = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicButton");

  if (!music || !button) return;

  music.loop = true;
  music.volume = 0.35;

  function updateButton(isPlaying) {
    button.classList.toggle("music-playing", isPlaying);
    button.setAttribute("aria-pressed", String(isPlaying));
    button.setAttribute(
      "aria-label",
      isPlaying ? "Apagar música" : "Activar música"
    );
    button.title = isPlaying ? "Apagar música" : "Activar música";
    button.innerHTML = isPlaying ? "♫" : "♪";
  }

  button.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        updateButton(true);
      } catch (error) {
        updateButton(false);
        console.error("No se pudo reproducir la música:", error);
      }
    } else {
      music.pause();
      updateButton(false);
    }
  });

  music.addEventListener("play", () => updateButton(true));
  music.addEventListener("pause", () => updateButton(false));

  updateButton(false);
})();
