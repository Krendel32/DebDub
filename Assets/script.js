const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// Открытие/закрытие меню
menuToggle.addEventListener('click', () => {
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-250px';
    } else {
        sideMenu.style.left = '0px';
    }
});
// раскрытие вложенного списка
document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.parentElement;
        group.classList.toggle('active');
    });
});




const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle.querySelector('.sun');
const moonIcon = themeToggle.querySelector('.moon');

// Проверяем сохранённую тему
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    moonIcon.classList.add('active');
} else {
    sunIcon.classList.add('active');
}

themeToggle.addEventListener('click', () => {
    const darkMode = body.classList.toggle('dark');

    if (darkMode) {
        sunIcon.classList.remove('active');
        moonIcon.classList.add('active');
        localStorage.setItem('theme', 'dark');
    } else {
        moonIcon.classList.remove('active');
        sunIcon.classList.add('active');
        localStorage.setItem('theme', 'light');
    }
});


const episodesList = document.getElementById('episodesList');
const videoPlayer = document.getElementById('videoPlayer');



