function celebrate() {

    const msg = document.getElementById('hiddenMsg');
    msg.style.display = 'block';
  
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      document.getElementById('hearts').appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  
    launchConfetti();
  }
  
  function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const pieces = [];
    const colors = ['#ff4081', '#ffd1dc', '#f48fb1', '#e91e63'];
  
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        radius: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        dy: Math.random() * 3 + 1
      });
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    }
  
    function update() {
      for (const p of pieces) {
        p.y += p.dy;
      }
    }
  
    function animate() {
      draw();
      update();
      requestAnimationFrame(animate);
    }
  
    animate();
  }