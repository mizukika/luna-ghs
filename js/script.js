document.addEventListener('DOMContentLoaded', function() {
  const translations = {
  ru: {
    title: "Луна",
    description: "Просто Луна.<br> Одна из тех, кто создала GHS",
    ad_block: "GHS Team<br> это сообщество для общения, где вы можете найти новых друзей и единомышленников. Мы объединяем людей, интересующихся программированием и видеоиграми, создавая комфортную атмосферу для обмена опытом, идей и просто приятного общения.",
    telegram_label: "Telegram",
    discord_label: "Discord",
    bot_label: "Бот"
  },
  en: {
    title: "Luna",
    description: "Just Luna.<br> One of those who created GHS",
    ad_block: "GHS Team<br> is a community for communication where you can find new friends and like-minded people. We bring together individuals interested in programming and video games, creating a comfortable atmosphere for sharing experiences, ideas, and just friendly chats.",
    telegram_label: "Telegram",
    discord_label: "Discord",
    bot_label: "Bot"
  },
  es: {
    title: "Luna",
    description: "Solo Luna.<br> Una de las que creó GHS",
    ad_block: "Equipo GHS<br> es una comunidad para la comunicación donde puedes encontrar nuevos amigos y personas con intereses similares. Reunimos a personas interesadas en la programación y los videojuegos, creando un ambiente cómodo para compartir experiencias, ideas y simplemente charlar amigablemente.",
    telegram_label: "Telegram",
    discord_label: "Discord",
    bot_label: "Bot"
  }
};

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      let text = key.split('.').reduce((obj, k) => obj && obj[k], translations[lang]);
      if (text) {
        if (element.tagName === 'TITLE' || element.tagName === 'P' || element.tagName === 'H1') {
          element.innerHTML = text;
        } else {
          element.textContent = text;
        }
        if (element.hasAttribute('aria-label')) {
          element.setAttribute('aria-label', text);
        }
      }
    });
    document.documentElement.lang = lang;
    document.querySelector('.language-current').textContent = {
      ru: '🇷🇺',
      en: '🇬🇧',
      es: '🇪🇸'
    }[lang];
  }

  const heartsContainer = document.getElementById('hearts-container');
   const colors = ['#fffafa', '#e0dada', '#ffcccc', '#ffe6e6'];
  
  function createHeart(x, y, isClick = false) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🤍';
    
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
    const count = 5 + Math.floor(Math.random() * 3); // 5–7 капель
    for (let i = 0; i < count; i++) {
      setTimeout(() => createHeart(), i * 200);
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

  const languageSwitcher = document.querySelector('.language-switcher');
  const languageCurrent = document.querySelector('.language-current');
  const languageMenu = document.querySelector('.language-menu');
  const languageOptions = document.querySelectorAll('.language-option');

  languageCurrent.addEventListener('click', () => {
    languageMenu.classList.toggle('show');
  });

  languageOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      setLanguage(lang);
      languageMenu.classList.remove('show');
    });
  });

  document.addEventListener('click', (e) => {
    if (!languageSwitcher.contains(e.target)) {
      languageMenu.classList.remove('show');
    }
  });

  setLanguage('ru');
});
