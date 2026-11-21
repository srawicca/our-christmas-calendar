
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
      document.removeEventListener("click", startMusic);
    } catch (error) {
      updateButton(false);
    }
  }

  // Intentar reproducir al entrar en la página
  startMusic();

  // Si el navegador bloquea la reproducción automática,
  // arrancará al primer toque del usuario
  document.addEventListener("click", startMusic);

  // El botón permite apagar y volver a encender la música
  button.addEventListener("click", async (event) => {
    event.stopPropagation();

    if (music.paused) {
      await startMusic();
    } else {
      music.pause();
      updateButton(false);
    }
  });

  music.addEventListener("play", () => updateButton(true));
  music.addEventListener("pause", () => updateButton(false));
})();
