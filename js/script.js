document.addEventListener('DOMContentLoaded', function() {
  const heartsContainer = document.getElementById('hearts-container');
  const colors = ['#4FC3F7', '#0288D1', '#81D4FA', '#B3E5FC'];
  
  function createHeart(x, y, isClick = false) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💧';
    
    if (isClick) {
      heart.style.left = `${x + (Math.random() - 0.5) * 20}px`;
      heart.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      heart.style.fontSize = `${20 + Math.random() * 20}px`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      heart.style.opacity = '0.9';
    } else {
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `100vh`;
      heart.style.fontSize = `${20 + Math.random() * 30}px`;
      heart.style.animationDuration = `${10 + Math.random() * 15}s`;
      heart.style.opacity = `${0.3 + Math.random() * 0.7}`;
    }
    
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationName = `float${Math.floor(Math.random() * 3) + 1}`;
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, parseFloat(heart.style.animationDuration) * 1000);
  }

  document.addEventListener('click', function(e) {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createHeart(e.clientX, e.clientY, true), i * 100);
    }
  });

  function generateBackgroundHearts() {
    const count = 3 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => createHeart(), i * 300);
    }
    
    setTimeout(generateBackgroundHearts, 1000);
  }

  for (let i = 0; i < 20; i++) {
    setTimeout(() => createHeart(), i * 150);
  }
  
  generateBackgroundHearts();
  
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const wave = document.createElement('span');
      wave.className = 'wave';
      this.appendChild(wave);
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${e.clientX - rect.left - size/2}px`;
      wave.style.top = `${e.clientY - rect.top - size/2}px`;
      
      setTimeout(() => wave.remove(), 400);
    });
  });
});
