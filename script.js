document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrixSize = 16;
  const columns = Math.floor(canvas.width / matrixSize);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops.push(Math.random() * canvas.height);
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = `${matrixSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(Math.floor(Math.random() * 96) + 32);
      ctx.fillText(text, i * matrixSize, drops[i] * matrixSize);

      if (drops[i] * matrixSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
});
