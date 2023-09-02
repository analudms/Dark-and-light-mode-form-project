const mode = document.getElementById('modeIcon');

mode.addEventListener('click', () => {
    const form = document.getElementById('loginForm');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');

        return;
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark')
    }
});