(() => {
  const calendar = document.getElementById("calendar");
  const dialog = document.getElementById("letterDialog");
  const closeButton = document.getElementById("closeDialog");
  const title = document.getElementById("letterTitle");
  const kicker = document.getElementById("letterKicker");
  const content = document.getElementById("letterContent");

  // El calendario usa diciembre del año actual. Antes del 1 de diciembre,
  // el día 1 queda disponible para que puedas probarlo.
  const now = new Date();
  const year = now.getFullYear();
  const isDecember = now.getMonth() === 11;
  const today = isDecember ? now.getDate() : (now < new Date(year, 11, 1) ? 1 : 24);
  const symbols = ["❧","✳","❦","✺","❧","✻","❦","✳","❧","✺","❦","✻"];

  for (let day = 1; day <= 24; day++) {
    const button = document.createElement("button");
    button.className = "envelope";
    button.type = "button";
    button.setAttribute("aria-label", `Sobre del día ${day}`);
    const locked = day > today;
    if (locked) {
      button.classList.add("locked");
      button.disabled = true;
      button.setAttribute("aria-label", `Día ${day}, todavía cerrado`);
    }
    button.innerHTML = `<span class="flap" aria-hidden="true"></span><span class="day-number">${day}</span><span class="botanical" aria-hidden="true">${symbols[(day - 1) % symbols.length]}</span>${locked ? '<span class="lock-mark" aria-hidden="true">✦</span>' : ''}`;
    button.addEventListener("click", () => {
      if (locked) return;
      button.classList.add("opening", "opened");
      const item = (window.adventContent || [])[day - 1] || {};
      title.textContent = item.title || `Día ${day}`;
      kicker.textContent = `Una sorpresa para ti · ${day} de diciembre`;
      content.innerHTML = item.message || "Pronto habrá una sorpresa aquí.";
      dialog.showModal();
      window.setTimeout(() => button.classList.remove("opening"), 500);
    });
    calendar.appendChild(button);
  }
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
