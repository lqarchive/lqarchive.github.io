 
// Получение элемента <body>
const body = document.body;

// Создание объекта MediaQueryList для отслеживания изменения темы в операционной системе
const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Функция для обработки изменения темы
function handleThemeChange(e) {
    if (e.matches) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

// Инициализация темы на основе текущей настройки операционной системы
handleThemeChange(darkThemeQuery);

// Отслеживание изменений темы в операционной
