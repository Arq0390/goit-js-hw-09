function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let intervalId = null;

function changeBackgroundColor() {
  const body = document.querySelector('body');
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
}

function startColorChange() {
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

  startBtn.disabled = true;
  stopBtn.disabled = false;

  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');

  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(intervalId);
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
