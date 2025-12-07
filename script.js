function openLink(url) {
    // Для открытия ссылок внутри Telegram Mini App
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.openLink(url);
    } else {
        window.open(url, '_blank');
    }
}

// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand(); // Раскрыть на весь экран
    Telegram.WebApp.setHeaderColor('#000000'); // Черный цвет шапки
    Telegram.WebApp.setBackgroundColor('#000000'); // Черный фон
}