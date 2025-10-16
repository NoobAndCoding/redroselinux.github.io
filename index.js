const el = document.getElementById("typewriter");

const list = [
  "FOSS only",
  "Reproducible",
  "Rolling and stable",
  "Riced",
  "User-friendly",
  "Dev-friendly"
];

const speed = 90;
const delay = 1000;

async function type(txt) {
  for (let i = 0; i < txt.length; i++) {
    el.innerHTML = txt.slice(0, i + 1) + '<span class="cursor"></span>';
    await new Promise(r => setTimeout(r, speed));
  }
  await new Promise(r => setTimeout(r, delay));
  for (let i = txt.length; i >= 0; i--) {
    el.innerHTML = txt.slice(0, i) + '<span class="cursor"></span>';
    await new Promise(r => setTimeout(r, speed / 1.6));
  }
}

async function loop() {
  let i = 0;
  while (true) {
    await type(list[i]);
    i++;
    if (i >= list.length) i = 0;
  }
}

loop();
