const screens = document.querySelectorAll('.screen');
const music = document.getElementById('bgMusic');

const lines = [
  "I don’t promise perfection… I promise choosing you every day 💖",
  "Every plan feels safer when your name is in it 🫀",
  "You are not my habit — you are my home 💝"
];

let i = 0;

function go(n) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById('s' + n).classList.add('active');
  if (n === 2) music.play();
}

function yes() {
  go(4);
}

function no() {
  go(3);
}

function next() {
  i++;
  if (i < lines.length) {
    document.getElementById('line').innerText = lines[i];
  } else {
    go(7);
  }
}

function restart() {
  i = 0;
  document.getElementById('line').innerText = lines[0];
  go(1);
}

function theme(t) {
  if (t === 1)
    document.body.style.background = "linear-gradient(135deg,#ffb6c1,#ff4d6d)";
  if (t === 2)
    document.body.style.background = "linear-gradient(135deg,#ffd1dc,#ff9aa2)";
  if (t === 3)
    document.body.style.background = "linear-gradient(135deg,#ff0844,#ff6f91)";
}
