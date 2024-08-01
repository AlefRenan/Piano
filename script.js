const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector(".checkbox");
const interruptor = document.querySelector(".interruptor");
const pianoKeys = document.querySelector(".piano_keys");

const playNote = (nota) => {
  const audio = new Audio(`./notes/${nota}.wav`);
  audio.play();
};

const handleClick = (key) => {
  playNote(key.getAttribute("data-note"));

  if (key.className.includes("black")) {
    key.classList.add("black_pressed");
  } else key.style.background = "#ddd";
};
const handleMouse = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black_pressed");
  } else key.style.background = "white";
};

keys.forEach((key) => {
  key.addEventListener("mousedown", () => handleClick(key));
  key.addEventListener("mouseup", () => handleMouse(key));
});

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    interruptor.classList.add("interruptor_active");
    pianoKeys.classList.remove("disabled_keys");
    return;
  }
  pianoKeys.classList.add("disabled_keys");
  interruptor.classList.remove("interruptor_active");
});

const keyDown = {
  q: () => handleClick(keys[0]),
  Q: () => handleClick(keys[0]),
  1: () => handleClick(keys[1]),
  w: () => handleClick(keys[2]),
  W: () => handleClick(keys[2]),
  2: () => handleClick(keys[3]),
  e: () => handleClick(keys[4]),
  r: () => handleClick(keys[5]),
  E: () => handleClick(keys[4]),
  R: () => handleClick(keys[5]),
  3: () => handleClick(keys[6]),
  t: () => handleClick(keys[7]),
  T: () => handleClick(keys[7]),
  4: () => handleClick(keys[8]),
  y: () => handleClick(keys[9]),
  Y: () => handleClick(keys[9]),
  5: () => handleClick(keys[10]),
  a: () => handleClick(keys[11]),
  s: () => handleClick(keys[12]),
  A: () => handleClick(keys[11]),
  S: () => handleClick(keys[12]),
  6: () => handleClick(keys[13]),
  d: () => handleClick(keys[14]),
  D: () => handleClick(keys[14]),
  7: () => handleClick(keys[15]),
  f: () => handleClick(keys[16]),
  g: () => handleClick(keys[17]),
  F: () => handleClick(keys[16]),
  G: () => handleClick(keys[17]),
  8: () => handleClick(keys[18]),
  z: () => handleClick(keys[19]),
  Z: () => handleClick(keys[19]),
  9: () => handleClick(keys[20]),
  x: () => handleClick(keys[21]),
  X: () => handleClick(keys[21]),
  0: () => handleClick(keys[22]),
  c: () => handleClick(keys[23]),
  C: () => handleClick(keys[23]),
};

const keyUp = {
  q: () => handleMouse(keys[0]),
  Q: () => handleMouse(keys[0]),
  1: () => handleMouse(keys[1]),
  w: () => handleMouse(keys[2]),
  W: () => handleMouse(keys[2]),
  2: () => handleMouse(keys[3]),
  e: () => handleMouse(keys[4]),
  r: () => handleMouse(keys[5]),
  E: () => handleMouse(keys[4]),
  R: () => handleMouse(keys[5]),
  3: () => handleMouse(keys[6]),
  t: () => handleMouse(keys[7]),
  T: () => handleMouse(keys[7]),
  4: () => handleMouse(keys[8]),
  y: () => handleMouse(keys[9]),
  Y: () => handleMouse(keys[9]),
  5: () => handleMouse(keys[10]),
  a: () => handleMouse(keys[11]),
  s: () => handleMouse(keys[12]),
  A: () => handleMouse(keys[11]),
  S: () => handleMouse(keys[12]),
  6: () => handleMouse(keys[13]),
  d: () => handleMouse(keys[14]),
  D: () => handleMouse(keys[14]),
  7: () => handleMouse(keys[15]),
  f: () => handleMouse(keys[16]),
  g: () => handleMouse(keys[17]),
  F: () => handleMouse(keys[16]),
  G: () => handleMouse(keys[17]),
  8: () => handleMouse(keys[18]),
  z: () => handleMouse(keys[19]),
  Z: () => handleMouse(keys[19]),
  9: () => handleMouse(keys[20]),
  x: () => handleMouse(keys[21]),
  X: () => handleMouse(keys[21]),
  0: () => handleMouse(keys[22]),
  c: () => handleMouse(keys[23]),
  C: () => handleMouse(keys[23]),
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  keyDown[e.key]();
});
document.addEventListener("keyup", (e) => {
  keyUp[e.key]();
});
