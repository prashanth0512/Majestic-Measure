document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const currentTheme = localStorage.getItem('maison_theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    const savedDir = localStorage.getItem('maison_dir') || 'ltr';
    const applyDir = (dir) => {
        document.documentElement.setAttribute('dir', dir);
        localStorage.setItem('maison_dir', dir);
        rtlToggles.forEach(btn => {
            btn.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
        });
    };
    applyDir(savedDir);
    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
            applyDir(currentDir === 'ltr' ? 'rtl' : 'ltr');
        });
    });
    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener('click', () => {
            const isLightMode = document.body.classList.toggle('light-mode');
            if (isLightMode) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('maison_theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('maison_theme', 'dark');
            }
        });
    }
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const field = this.closest('.auth-field') || this.parentElement;
            const input = field ? field.querySelector('input[type="password"], input[type="text"]') : this.previousElementSibling;
            if (input && input.tagName === 'INPUT') {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.classList.remove('fa-eye');
                    this.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    this.classList.remove('fa-eye-slash');
                    this.classList.add('fa-eye');
                }
            }
        });
    });
const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = ''; 
            }
        });
        if (isValid) {
            if (form.id === 'signup-form') {
                const password = form.querySelector('#password').value;
                const confirmPassword = form.querySelector('#confirm-password').value;
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
            }
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 500);
        }
    };
    if (loginForm) loginForm.addEventListener('submit', handleFormSubmit);
    if (signupForm) signupForm.addEventListener('submit', handleFormSubmit);
});
