const messages = [
  "I like how easy it feels with you.",
  "You make normal days better.",
  "I’m really happy it’s you."
];

const cards = document.querySelectorAll(".card");
const musicBtn = document.getElementById("musicBtn");
const player = document.getElementById("player");
const unlockBtn = document.getElementById("unlockBtn");
const finalMessage = document.getElementById("finalMessage");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.classList.add("revealed");
    card.textContent = messages[index];
  });
});

musicBtn.addEventListener("click", () => {
  player.classList.toggle("hidden");
});

unlockBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  unlockBtn.style.display = "none";
});
