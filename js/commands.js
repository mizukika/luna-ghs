document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    ru: {
      commands_title: "Команды бота",
      back_button: "◄",
      add_auto_bot_button: "Добавить Авто Краш Бота",
      add_crash_bot_button: "Добавить Краш Бота",
      free_commands: "Бесплатные команды",
      premium_commands: "👑 Premium команды",
      copy_button: "Нажмите для копирования",
      copied_button: "Скопировано!",
      commands: {
        nuke: { name: "!nuke", desc: "Уничтожить сервер" },
        crssh: { name: "!crssh [id/ссылка]", desc: "Снести сервер по ID/ссылке" },
        auto_nuke: { name: "!auto_nuke [on/off]", desc: "Авто-снос" },
        stats: { name: "!stats", desc: "Статистика" },
        createchannels: { name: "!createchannels", desc: "Создать каналы" },
        create_threads: { name: "!create_threads", desc: "Создать ветки" },
        spamrole: { name: "!spamrole", desc: "Создать роли" },
        rename_server: { name: "!rename_server", desc: "Переименовать сервер" },
        rename_roles: { name: "!rename_roles", desc: "Переименовать роли" },
        rename_channels: { name: "!rename_channels", desc: "Переименовать каналы" },
        icon: { name: "!icon", desc: "Изменить иконку" },
        banall: { name: "!banall", desc: "Забанить всех" },
        ban: { name: "!ban <id/username>", desc: "Забанить" },
        kickall: { name: "!kickall", desc: "Кикнуть всех" },
        kick: { name: "!kick <id/username>", desc: "Кикнуть" },
        unbanall: { name: "!unbanall", desc: "Разбанить всех" },
        massmute: { name: "!massmute", desc: "Замутить всех" },
        massunmute: { name: "!massunmute", desc: "Размьютить всех" },
        mute: { name: "!mute <id/username>", desc: "Замутить" },
        admin: { name: "!admin", desc: "Админка" },
        everyone_admin: { name: "!everyone_admin", desc: "Всем админку" },
        spam: { name: "!spam", desc: "Спам" },
        nsfw_all: { name: "!nsfw_all", desc: "NSFW все" },
        unnsfw_all: { name: "!unnsfw_all", desc: "UNNSFW все" },
        emoji: { name: "!emoji", desc: "Эмодзи" },
        stickers: { name: "!stickers", desc: "Стикеры" },
        spam_webhooks: { name: "!spam_webhooks", desc: "Спам вебхуки" },
        webhooks: { name: "!webhooks", desc: "Вебхуки" },
        delete_webhook: { name: "!delete_webhook [ссылка]", desc: "Удалить вебхук" },
        disable_community: { name: "!disable_community", desc: "Отключить сообщество" },
        disable_automod: { name: "!disable_automod", desc: "Отключить автомод" },
        ping: { name: "!ping", desc: "Пинг" },
        invite: { name: "!invite", desc: "Пригласить" },
        info: { name: "!info", desc: "Информация о сервере и шаблон" },
        update: { name: "!update", desc: "Обновления бота" },
        config: { name: "!config", desc: "Конфигурация бота" },
        config_info: { name: "!config_info", desc: "Информация о конфигурации" },
        custom_createchannels: { name: "!custom_createchannels [text]", desc: "Создать каналы с вашим названием" },
        custom_create_threads: { name: "!custom_create_threads [thread_name] [text]", desc: "Создать ветки с вашим названием" },
        delchannels: { name: "!delchannels", desc: "Удалить все каналы" },
        custom_spam: { name: "!custom_spam [count] [text]", desc: "Спам вашим текстом" },
        custom_rename_server: { name: "!custom_rename_server [text]", desc: "Переименовать сервер вашим названием" },
        custom_rename_channels: { name: "!custom_rename_channels [text]", desc: "Переименовать каналы вашим названием" },
        custom_rename_roles: { name: "!custom_rename_roles [text]", desc: "Переименовать роли вашим названием" },
        custom_spam_webhooks: { name: "!custom_spam_webhooks [text]", desc: "Спам в вебхуки вашим текстом" },
        custom_webhooks: { name: "!custom_webhooks [text]", desc: "Создать вебхуки и спамить вашим текстом" },
        custom_icon: { name: "!custom_icon [url,png,jpg,jpeg,gif]", desc: "Установить вашу иконку сервера" },
        custom_role: { name: "!custom_role [text]", desc: "Создать роли с вашим названием" },
        ghostping: { name: "!ghostping", desc: "Призрачный пинг" },
        purge: { name: "!purge", desc: "Очистить сообщения в каналах" },
        server_lockdown: { name: "!server_lockdown", desc: "Скрыть все каналы от участников" },
        show_channels: { name: "!show_channels", desc: "Показать все каналы участникам" },
        close_server: { name: "!close_server", desc: "Закрыть все каналы для сообщений" },
        unlock_server: { name: "!unlock_server", desc: "Открыть все каналы для сообщений" },
        massnick: { name: "!massnick [nick]", desc: "Изменить никнеймы всем участникам" },
        invs_delete: { name: "!invs_delete", desc: "Удалить все приглашения на сервер" },
        gen: { name: "!gen [count]", desc: "Генератор Nitro" }
      }
    },
    en: {
      commands_title: "Bot Commands",
      back_button: "◄",
      add_auto_bot_button: "Add Auto Crash Bot",
      add_crash_bot_button: "Add Crash Bot",
      free_commands: "Free Commands",
      premium_commands: "👑 Premium Commands",
      copy_button: "Click to copy",
      copied_button: "Copied!",
      commands: {
        nuke: { name: "!nuke", desc: "Destroy the server" },
        crssh: { name: "!crssh [id/link]", desc: "Crash server by ID/link" },
        auto_nuke: { name: "!auto_nuke [on/off]", desc: "Auto-nuke" },
        stats: { name: "!stats", desc: "Statistics" },
        createchannels: { name: "!createchannels", desc: "Create channels" },
        create_threads: { name: "!create_threads", desc: "Create threads" },
        spamrole: { name: "!spamrole", desc: "Create roles" },
        rename_server: { name: "!rename_server", desc: "Rename server" },
        rename_roles: { name: "!rename_roles", desc: "Rename roles" },
        rename_channels: { name: "!rename_channels", desc: "Rename channels" },
        icon: { name: "!icon", desc: "Change icon" },
        banall: { name: "!banall", desc: "Ban all members" },
        ban: { name: "!ban <id/username>", desc: "Ban user" },
        kickall: { name: "!kickall", desc: "Kick all members" },
        kick: { name: "!kick <id/username>", desc: "Kick user" },
        unbanall: { name: "!unbanall", desc: "Unban all" },
        massmute: { name: "!massmute", desc: "Mute all" },
        massunmute: { name: "!massunmute", desc: "Unmute all" },
        mute: { name: "!mute <id/username>", desc: "Mute user" },
        admin: { name: "!admin", desc: "Get admin" },
        everyone_admin: { name: "!everyone_admin", desc: "Give admin to everyone" },
        spam: { name: "!spam", desc: "Spam messages" },
        nsfw_all: { name: "!nsfw_all", desc: "Make all channels NSFW" },
        unnsfw_all: { name: "!unnsfw_all", desc: "Remove NSFW from all channels" },
        emoji: { name: "!emoji", desc: "Spam emojis" },
        stickers: { name: "!stickers", desc: "Spam stickers" },
        spam_webhooks: { name: "!spam_webhooks", desc: "Spam webhooks" },
        webhooks: { name: "!webhooks", desc: "Create webhooks" },
        delete_webhook: { name: "!delete_webhook [link]", desc: "Delete webhook" },
        disable_community: { name: "!disable_community", desc: "Disable community" },
        disable_automod: { name: "!disable_automod", desc: "Disable automod" },
        ping: { name: "!ping", desc: "Check bot latency" },
        invite: { name: "!invite", desc: "Get invite link" },
        info: { name: "!info", desc: "Server info and template" },
        update: { name: "!update", desc: "Bot updates" },
        config: { name: "!config", desc: "Bot configuration" },
        config_info: { name: "!config_info", desc: "Configuration info" },
        custom_createchannels: { name: "!custom_createchannels [text]", desc: "Create channels with custom name" },
        custom_create_threads: { name: "!custom_create_threads [thread_name] [text]", desc: "Create threads with custom name" },
        delchannels: { name: "!delchannels", desc: "Delete all channels" },
        custom_spam: { name: "!custom_spam [count] [text]", desc: "Spam with custom text" },
        custom_rename_server: { name: "!custom_rename_server [text]", desc: "Rename server with custom name" },
        custom_rename_channels: { name: "!custom_rename_channels [text]", desc: "Rename channels with custom name" },
        custom_rename_roles: { name: "!custom_rename_roles [text]", desc: "Rename roles with custom name" },
        custom_spam_webhooks: { name: "!custom_spam_webhooks [text]", desc: "Spam webhooks with custom text" },
        custom_webhooks: { name: "!custom_webhooks [text]", desc: "Create webhooks and spam with custom text" },
        custom_icon: { name: "!custom_icon [url,png,jpg,jpeg,gif]", desc: "Set custom server icon" },
        custom_role: { name: "!custom_role [text]", desc: "Create roles with custom name" },
        ghostping: { name: "!ghostping", desc: "Ghost ping everyone" },
        purge: { name: "!purge", desc: "Purge messages in channels" },
        server_lockdown: { name: "!server_lockdown", desc: "Hide all channels from members" },
        show_channels: { name: "!show_channels", desc: "Show all channels to members" },
        close_server: { name: "!close_server", desc: "Close all channels for messages" },
        unlock_server: { name: "!unlock_server", desc: "Open all channels for messages" },
        massnick: { name: "!massnick [nick]", desc: "Change nicknames for all members" },
        invs_delete: { name: "!invs_delete", desc: "Delete all server invites" },
        gen: { name: "!gen [count]", desc: "Nitro generator" }
      }
    },
    es: {
      commands_title: "Comandos del Bot",
      back_button: "◄",
      add_auto_bot_button: "Añadir Auto Crash Bot",
      add_crash_bot_button: "Añadir Crash Bot",
      free_commands: "Comandos Gratis",
      premium_commands: "👑 Comandos Premium",
      copy_button: "Haz clic para copiar",
      copied_button: "¡Copiado!",
      commands: {
        nuke: { name: "!nuke", desc: "Destruir el servidor" },
        crssh: { name: "!crssh [id/enlace]", desc: "Colapsar servidor por ID/enlace" },
        auto_nuke: { name: "!auto_nuke [on/off]", desc: "Auto-destrucción" },
        stats: { name: "!stats", desc: "Estadísticas" },
        createchannels: { name: "!createchannels", desc: "Crear canales" },
        create_threads: { name: "!create_threads", desc: "Crear hilos" },
        spamrole: { name: "!spamrole", desc: "Crear roles" },
        rename_server: { name: "!rename_server", desc: "Renombrar servidor" },
        rename_roles: { name: "!rename_roles", desc: "Renombrar roles" },
        rename_channels: { name: "!rename_channels", desc: "Renombrar canales" },
        icon: { name: "!icon", desc: "Cambiar icono" },
        banall: { name: "!banall", desc: "Banear a todos" },
        ban: { name: "!ban <id/nombre>", desc: "Banear usuario" },
        kickall: { name: "!kickall", desc: "Expulsar a todos" },
        kick: { name: "!kick <id/nombre>", desc: "Expulsar usuario" },
        unbanall: { name: "!unbanall", desc: "Desbanear a todos" },
        massmute: { name: "!massmute", desc: "Silenciar a todos" },
        massunmute: { name: "!massunmute", desc: "Desilenciar a todos" },
        mute: { name: "!mute <id/nombre>", desc: "Silenciar usuario" },
        admin: { name: "!admin", desc: "Obtener admin" },
        everyone_admin: { name: "!everyone_admin", desc: "Dar admin a todos" },
        spam: { name: "!spam", desc: "Enviar spam" },
        nsfw_all: { name: "!nsfw_all", desc: "Hacer todos los canales NSFW" },
        unnsfw_all: { name: "!unnsfw_all", desc: "Quitar NSFW de todos los canales" },
        emoji: { name: "!emoji", desc: "Spam de emojis" },
        stickers: { name: "!stickers", desc: "Spam de stickers" },
        spam_webhooks: { name: "!spam_webhooks", desc: "Spam en webhooks" },
        webhooks: { name: "!webhooks", desc: "Crear webhooks" },
        delete_webhook: { name: "!delete_webhook [enlace]", desc: "Eliminar webhook" },
        disable_community: { name: "!disable_community", desc: "Desactivar comunidad" },
        disable_automod: { name: "!disable_automod", desc: "Desactivar automod" },
        ping: { name: "!ping", desc: "Comprobar latencia" },
        invite: { name: "!invite", desc: "Obtener enlace de invitación" },
        info: { name: "!info", desc: "Información del servidor y plantilla" },
        update: { name: "!update", desc: "Actualizaciones del bot" },
        config: { name: "!config", desc: "Configuración del bot" },
        config_info: { name: "!config_info", desc: "Información de configuración" },
        custom_createchannels: { name: "!custom_createchannels [texto]", desc: "Crear canales con nombre personalizado" },
        custom_create_threads: { name: "!custom_create_threads [nombre_hilo] [texto]", desc: "Crear hilos con nombre personalizado" },
        delchannels: { name: "!delchannels", desc: "Eliminar todos los canales" },
        custom_spam: { name: "!custom_spam [cantidad] [texto]", desc: "Spam con texto personalizado" },
        custom_rename_server: { name: "!custom_rename_server [texto]", desc: "Renombrar servidor con nombre personalizado" },
        custom_rename_channels: { name: "!custom_rename_channels [texto]", desc: "Renombrar canales con nombre personalizado" },
        custom_rename_roles: { name: "!custom_rename_roles [texto]", desc: "Renombrar roles con nombre personalizado" },
        custom_spam_webhooks: { name: "!custom_spam_webhooks [texto]", desc: "Spam en webhooks con texto personalizado" },
        custom_webhooks: { name: "!custom_webhooks [texto]", desc: "Crear webhooks y spam con texto personalizado" },
        custom_icon: { name: "!custom_icon [url,png,jpg,jpeg,gif]", desc: "Establecer icono personalizado" },
        custom_role: { name: "!custom_role [texto]", desc: "Crear roles con nombre personalizado" },
        ghostping: { name: "!ghostping", desc: "Ghost ping a todos" },
        purge: { name: "!purge", desc: "Eliminar mensajes en canales" },
        server_lockdown: { name: "!server_lockdown", desc: "Ocultar todos los canales" },
        show_channels: { name: "!show_channels", desc: "Mostrar todos los canales" },
        close_server: { name: "!close_server", desc: "Cerrar todos los canales para mensajes" },
        unlock_server: { name: "!unlock_server", desc: "Abrir todos los canales para mensajes" },
        massnick: { name: "!massnick [apodo]", desc: "Cambiar apodos a todos" },
        invs_delete: { name: "!invs_delete", desc: "Eliminar todas las invitaciones" },
        gen: { name: "!gen [cantidad]", desc: "Generador de Nitro" }
      }
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      let text = key.split('.').reduce((obj, k) => obj && obj[k], translations[lang]);
      if (text) {

        if (key.endsWith('.name') || key.endsWith('.desc')) {
            element.innerHTML = text; 
        } else {
            element.textContent = text;
        }
      }
    });
    document.documentElement.lang = lang;
    document.querySelector('.language-current').textContent = {
      ru: '🇷🇺',
      en: '🇬🇧',
      es: '🇪🇸'
    }[lang];


    const currentCopyText = translations[lang].copy_button;
    document.querySelectorAll('.command-copy').forEach(button => {
        if (!button.disabled) {
            button.textContent = currentCopyText;
        }
    });
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


  const buttons = document.querySelectorAll('.add-bot-btn, .back-btn');
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


  const copyButtons = document.querySelectorAll('.command-copy');
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const command = this.getAttribute('data-command');
      navigator.clipboard.writeText(command).then(() => {
        const lang = document.documentElement.lang || 'ru';
        this.textContent = translations[lang].copied_button;
        this.disabled = true;
        setTimeout(() => {
          this.textContent = translations[lang].copy_button;
          this.disabled = false;
        }, 2000);
      });
    });
  });


  const languageSwitcher = document.querySelector('.language-switcher');
  const languageCurrent = document.querySelector('.language-current');
  const languageMenu = document.querySelector('.language-menu');
  const languageOptions = document.querySelectorAll('.language-option');

  if(languageSwitcher) {
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


  setLanguage('ru');
});
