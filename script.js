document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Ваша кнопка
    const root = document.documentElement; // <html>

    // 1. Проверка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'white') {
        root.classList.add('white-theme');
    }

    // 2. Обработчик клика
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            root.classList.toggle('white-theme');
            const isDark = root.classList.contains('white-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-button');
    const sliderbar = document.querySelector('slidebar');

    burger.addEventListener('click', function() {
        // Переключаем класс 'active' для показа/скрытия меню
        sliderbar.classList.toggle('active');
    });
});
