document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    ru: {
      title: "Мизу",
      description: "Просто Мизу.<br> Одна из тех, кто создала GHS",
      ad_block: "GHS Team<br> это сообщество для общения, где вы можете найти новых друзей и единомышленников. Мы объединяем людей, интересующихся программированием и видеоиграми, создавая комфортную атмосферу для обмена опытом, идей и просто приятного общения.",
      telegram_label: "Telegram",
      discord_label: "Discord",
      bot_label: "Бот"
    },
    en: {
      title: "Luna",
      description: "Just Mizu.<br> One of those who created GHS",
      ad_block: "GHS Team<br> is a community for communication where you can find new friends and like-minded people. We bring together individuals interested in programming and video games, creating a comfortable atmosphere for sharing experiences, ideas, and just friendly chats.",
      telegram_label: "Telegram",
      discord_label: "Discord",
      bot_label: "Bot"
    },
    es: {
      title: "Mizu",
      description: "Solo Mizu.<br> Una de las que creó GHS",
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

        if (['P', 'H1', 'DIV'].includes(element.tagName) && text.includes('<br>')) {
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



  const canvas = document.getElementById('hearts-canvas');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let hearts = [];
    

    const colors = ['#5c3c3c', '#ffb6c1', '#d87093', '#ffc0cb'];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }


    function createHeart(x, y, isClick = false) {
      const heart = {
        x: x || Math.random() * canvas.width,
        y: y || canvas.height + Math.random() * 50,
        size: isClick ? (20 + Math.random() * 20) : (20 + Math.random() * 30),
        speedY: isClick ? (1 + Math.random() * 2) : (0.5 + Math.random() * 1.5),
        speedX: isClick ? ((Math.random() - 0.5) * 2) : 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: isClick ? 0.9 : (0.3 + Math.random() * 0.7),
        rotation: (Math.random() - 0.5) * Math.PI / 4,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        character: '🤍',
      };
      hearts.push(heart);
    }


    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = hearts.length - 1; i >= 0; i--) {
        const heart = hearts[i];
        
        heart.y -= heart.speedY;
        heart.x += heart.speedX;
        heart.rotation += heart.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = heart.opacity;
        ctx.fillStyle = heart.color;
        ctx.font = `${heart.size}px serif`;
        ctx.translate(heart.x, heart.y);
        ctx.rotate(heart.rotation);
        ctx.fillText(heart.character, 0, 0);
        ctx.restore();


        if (heart.y < -heart.size) {
          hearts.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    }


    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    document.addEventListener('click', function(e) {

      if (e.target.closest('a, button')) return;
      for (let i = 0; i < 8; i++) {
        createHeart(e.clientX, e.clientY, true);
      }
    });

    setInterval(createHeart, 800);
    
    animate();
  }


  const buttons = document.querySelectorAll('.btn, .add-bot-btn, .back-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const wave = document.createElement('span');
      wave.className = 'wave';
      this.appendChild(wave);
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${e.clientX - rect.left - size / 2}px`;
      wave.style.top = `${e.clientY - rect.top - size / 2}px`;
      setTimeout(() => wave.remove(), 400);
    });
  });

  const languageSwitcher = document.querySelector('.language-switcher');
  const languageCurrent = document.querySelector('.language-current');
  const languageMenu = document.querySelector('.language-menu');
  const languageOptions = document.querySelectorAll('.language-option');

  if (languageSwitcher) {
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
  }

  // Устанавливаем язык по умолчанию при загрузке страницы
  setLanguage('ru');
});

