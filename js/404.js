document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            if (icon) icon.className = 'fa-regular fa-moon';
        } else {
            document.body.classList.remove('light-mode');
            if (icon) icon.className = 'fa-regular fa-sun';
        }
        localStorage.setItem('maison_theme', theme);
    };
    const savedTheme = localStorage.getItem('maison_theme') || 'dark';
    applyTheme(savedTheme);
    themeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        applyTheme(isLight ? 'dark' : 'light');
    });
});
