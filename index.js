const themeToggleBtn = document.getElementById('toggle-theme');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleTheme('dark');
}

themeToggleBtn.addEventListener('click', () => {
    toggleTheme();
});

function toggleTheme(theme = null) {
    const currentTheme = document.documentElement.getAttribute('theme');

    if (theme === 'light' || !currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('theme', 'dark');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        document.documentElement.setAttribute('theme', 'light');
        themeToggleBtn.textContent = 'Dark Mode';
    }
}
