const messages = [
  "Hi Aubrey. Happy 1 month to us.",
  "One month may seem small, but it already means a lot to me.",
  "I love how easy it feels being with you.",
  "You make ordinary days feel lighter.",
  "This song reminded me of you, so I wanted it playing here.",
  "Thank you for choosing me too."
];

let index = 0;
let started = false;
let holdTimer;

const messageEl = document.getElementById("message");
const countEl = document.getElementById("count");
const barEl = document.getElementById("bar");
const finalEl = document.getElementById("final");
const secretEl = document.getElementById("secret");
const heartBtn = document.getElementById("heartBtn");
const music = document.getElementById("music");
const card = document.getElementById("card");

function startMusic() {
  if (!started) {
    music.src += "&autoplay=1";
    started = true;
  }
}

function vibrate() {
  if (navigator.vibrate) navigator.vibrate(30);
}

function spawnHeart(x, y) {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "💗";
  h.style.left = x + "px";
  h.style.top = y + "px";
  card.appendChild(h);
  setTimeout(() => h.remove(), 1300);
}

function nextMessage(e) {
  startMusic();
  vibrate();

  const rect = card.getBoundingClientRect();
  spawnHeart(e.clientX - rect.left, e.clientY - rect.top);

  if (index < messages.length) {
    messageEl.textContent = messages[index];
    index++;
    countEl.textContent = index;
    barEl.style.width = (index / messages.length) * 100 + "%";
  }

  if (index === messages.length) {
    heartBtn.classList.add("hidden");
    finalEl.classList.remove("hidden");
    celebrate();
  }
}

function celebrate() {
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      spawnHeart(Math.random() * 300, 200);
    }, i * 100);
  }
}

// tap
heartBtn.addEventListener("click", nextMessage);

// long press secret
heartBtn.addEventListener("touchstart", () => {
  holdTimer = setTimeout(() => {
    secretEl.classList.remove("hidden");
  }, 800);
});

heartBtn.addEventListener("touchend", () => {
  clearTimeout(holdTimer);
});


