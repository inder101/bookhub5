const darkToggle = document.getElementById('darkModeToggle');
const darkIcon = document.getElementById('darkModeIcon');
if (darkToggle) {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkIcon.textContent = '☀️';
    }
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkIcon.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkIcon.textContent = '🌙';
        }
    });
}