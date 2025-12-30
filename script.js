document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const music = document.getElementById("bgMusic");

  const lines = [
    "I don’t promise perfection… I promise choosing you every single day 💖",
    "Every plan feels warmer when your name is in it 🫀",
    "You are not my habit — you are my home 💝"
  ];

  let i = 0;

  const show = id => {
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };

  document.getElementById("continueBtn").onclick = () => {
    show("s2");
    music.play();
  };

  document.getElementById("yesBtn").onclick = () => show("s4");
  document.getElementById("noBtn").onclick = () => show("s3");
  document.querySelectorAll(".yesAgain").forEach(b => b.onclick = () => show("s4"));
  document.getElementById("enterBtn").onclick = () => show("s5");
  document.getElementById("vibeBtn").onclick = () => show("s6");

  document.getElementById("nextBtn").onclick = () => {
    i++;
    if (i < lines.length) {
      document.getElementById("line").innerText = lines[i];
    } else {
      show("s7");
    }
  };

  document.getElementById("restartBtn").onclick = () => {
    i = 0;
    document.getElementById("line").innerText = lines[0];
    show("s1");
  };

  document.querySelectorAll(".theme").forEach(t => {
    t.onclick = () => {
      const v = t.getAttribute("data");
      if (v === "1") document.body.style.background = "radial-gradient(circle,#ffe6ee,#ff7a9c)";
      if (v === "2") document.body.style.background = "radial-gradient(circle,#ffd1dc,#ff4d6d)";
      if (v === "3") document.body.style.background = "radial-gradient(circle,#ff4d6d,#ff0844)";
    };
  });
});
