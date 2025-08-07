document.addEventListener('DOMContentLoaded', function() {
  // Микро-взаимодействия для кнопок
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Создаем волну
      const wave = document.createElement('span');
      wave.className = 'wave';
      this.appendChild(wave);
      
      // Позиционируем волну
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${e.clientX - rect.left - size/2}px`;
      wave.style.top = `${e.clientY - rect.top - size/2}px`;
      
      // Удаляем волну после анимации
      setTimeout(() => wave.remove(), 1000);
      
      // Создаем сердечки
      createHearts(e.clientX, e.clientY);
    });
  });
  
  // Функция создания сердечек
  function createHearts(x, y) {
    const heartsContainer = document.getElementById('hearts-container');
    const colors = ['#ff80ab', '#ff4081', '#ff1493', '#ff69b4', '#db7093'];
    
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = `${x + (Math.random() - 0.5) * 20}px`;
      heart.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      heart.style.fontSize = `${14 + Math.random() * 10}px`;
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      heartsContainer.appendChild(heart);
      
      // Удаляем сердечко после анимации
      setTimeout(() => heart.remove(), 4000);
    }
  }
  
  // Автоматические сердечки на фоне
  function createBackgroundHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    if (Math.random() > 0.7) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `100vh`;
      heart.style.fontSize = `${14 + Math.random() * 20}px`;
      heart.style.animationDuration = `${8 + Math.random() * 10}s`;
      heart.style.opacity = `${0.2 + Math.random() * 0.5}`;
      
      heartsContainer.appendChild(heart);
      
      // Удаляем сердечко после анимации
      setTimeout(() => heart.remove(), 18000);
    }
    setTimeout(createBackgroundHearts, 300);
  }
  
  // Запускаем фоновые сердечки
  createBackgroundHearts();
});