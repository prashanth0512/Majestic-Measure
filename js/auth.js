document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    const savedDir = localStorage.getItem('maison_dir') || 'ltr';
    if (savedDir === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
    }

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener('click', () => {
            const isLightMode = document.body.classList.toggle('light-mode');
            
            if (isLightMode) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
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
