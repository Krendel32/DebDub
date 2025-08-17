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




const themeSwitch = document.getElementById('themeSwitch');

// При загрузке страницы — ставим правильное положение переключателя
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeSwitch.checked = true;
}

// При изменении положения переключателя
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

const episodesList = document.getElementById('episodesList');
const videoPlayer = document.getElementById('videoPlayer');



// Генерация кнопок из массива
episodesDon.forEach(ep => {
    const btn = document.createElement('button');
    btn.textContent = ep.title;
    btn.addEventListener('click', () => {
        videoPlayer.querySelector('source').src = ep.url;
        videoPlayer.load();
        videoPlayer.play();
    });
    episodesList.appendChild(btn);
});

