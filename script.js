let currentFlirt = 0;
const flirts = [
  "I choose you on easy days and hard ones.",
  "Every plan feels better when your name is in it.",
  "You’re not my resolution. You’re my constant."
];

function nextScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');

  if (n === 2) {
    document.getElementById('bgMusic').play();
  }
}

function yes() {
  nextScreen(4);
}

function no() {
  nextScreen(3);
}

function setTheme(theme) {
  if (theme === 'romantic')
    document.body.style.background = "linear-gradient(135deg,#ffb6c1,#ff4d6d)";
  if (theme === 'flirty')
    document.body.style.background = "linear-gradient(135deg,#ff758f,#ff7eb3)";
  if (theme === 'soft')
    document.body.style.background = "linear-gradient(135deg,#ffd1dc,#ff9aa2)";
  if (theme === 'crazy')
    document.body.style.background = "linear-gradient(135deg,#ff0844,#ffb199)";
}

function nextFlirt() {
  currentFlirt++;
  if (currentFlirt < flirts.length) {
    document.querySelector('.flirt').innerText = flirts[currentFlirt];
  } else {
    nextScreen(7);
  }
}

function restart() {
  currentFlirt = 0;
  document.querySelector('.flirt').innerText = flirts[0];
  nextScreen(1);
}
