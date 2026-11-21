
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
      isPlaying ? "Apagar música" : "Encender música"
    );
    button.title = isPlaying ? "Apagar música" : "Encender música";
    button.textContent = isPlaying ? "♫" : "♪";
  }

  async function startMusic() {
    try {
      await music.play();
      updateButton(true);
      document.removeEventListener("pointerdown", startMusic);
    } catch (error) {
      updateButton(false);
    }
  }

  // Intentar iniciar la música al abrir la página
  startMusic();

  // Si el navegador bloquea el inicio automático,
  // comenzará al primer toque fuera del botón
  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest("#musicButton")) return;
    startMusic();
  });

  // Botón para apagar o volver a encender
  button.addEventListener("click", async () => {
    if (music.paused) {
      await startMusic();
    } else {
      music.pause();
      updateButton(false);
    }
  });

  music.addEventListener("play", () => updateButton(true));
  music.addEventListener("pause", () => updateButton(false));

  updateButton(false);
})();
