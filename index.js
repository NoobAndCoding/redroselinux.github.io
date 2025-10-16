const el = document.getElementById("typewriter");

const words = [
  "FOSS only",
  "Reproducible",
  "Rolling and stable",
  "Riced",
  "User-friendly",
  "Dev-friendly"
];

const speed = 90;
const pause = 900;

async function type(text) {
  for (let i = 0; i < text.length; i++) {
    el.innerHTML = text.slice(0, i + 1) + '<span class="cursor"></span>';
    await new Promise(r => setTimeout(r, speed));
  }
  await new Promise(r => setTimeout(r, pause));
  for (let i = text.length; i > 0; i--) {
    el.innerHTML = text.slice(0, i - 1) + '<span class="cursor"></span>';
    await new Promise(r => setTimeout(r, speed / 1.5));
  }
}

async function loop() {
  let i = 0;
  while (true) {
    await type(words[i]);
    i = (i + 1) % words.length;
  }
}

loop();
