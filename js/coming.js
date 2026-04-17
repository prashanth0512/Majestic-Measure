
        const themeBtn = document.getElementById('theme-toggle');
        const icon = themeBtn.querySelector('i');
        
        const applyTheme = (theme) => {
            if (theme === 'light') {
                document.body.classList.add('light-mode');
                icon.className = 'fa-regular fa-moon';
            } else {
                document.body.classList.remove('light-mode');
                icon.className = 'fa-regular fa-sun';
            }
            localStorage.setItem('maison_theme', theme);
        };

        const savedTheme = localStorage.getItem('maison_theme') || 'dark';
        applyTheme(savedTheme);

        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.contains('light-mode');
            applyTheme(isLight ? 'dark' : 'light');
        });
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        function updateCountdown() {
            const now = new Date().getTime();
            const timeRemaining = targetDate.getTime() - now;

            if (timeRemaining > 0) {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.getElementById('days').innerText = days < 10 ? '0' + days : days;
                document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
                document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
                document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
            } else {
                document.getElementById('countdown').innerHTML = "<h3>Our newest collection has arrived.</h3>";
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();