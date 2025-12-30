document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const music = document.getElementById("bgMusic");

  const lines = [
    "I don’t promise perfection… I promise choosing you every day 💖",
    "Every plan feels safer when your name is in it 🫀",
    "You are not my habit — you are my home 💝"
  ];

  let index = 0;

  function show(id) {
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  document.getElementById("continueBtn").addEventListener("click", () => {
    show("s2");
    music.play();
  });

  document.getElementById("yesBtn1").addEventListener("click", () => {
    show("s4");
  });

  document.getElementById("noBtn").addEventListener("click", () => {
    show("s3");
  });

  document.querySelectorAll(".yesAgain").forEach(btn => {
    btn.addEventListener("click", () => show("s4"));
  });

  document.getElementById("enter2026").addEventListener("click", () => {
    show("s5");
  });

  document.getElementById("continueVibe").addEventListener("click", () => {
    show("s6");
  });

  document.getElementById("nextLine").addEventListener("click", () => {
    index++;
    if (index < lines.length) {
      document.getElementById("line").innerText = lines[index];
    } else {
      show("s7");
    }
  });

  document.getElementById("restart").addEventListener("click", () => {
    index = 0;
    document.getElementById("line").innerText = lines[0];
    show("s1");
  });

  document.querySelectorAll(".theme").forEach(t => {
    t.addEventListener("click", () => {
      const v = t.dataset.theme;
      if (v === "1")
        document.body.style.background = "linear-gradient(135deg,#ffb6c1,#ff4d6d)";
      if (v === "2")
        document.body.style.background = "linear-gradient(135deg,#ffd1dc,#ff9aa2)";
      if (v === "3")
        document.body.style.background = "linear-gradient(135deg,#ff0844,#ff6f91)";
    });
  });
});
