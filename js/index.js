document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll('.reveal, .service-card, .journey-item');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        if (animated) return;
        
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let current = 0;
            const duration = 2000; 
            const increment = target / (duration / 20); 

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current).toLocaleString() + (stat.getAttribute('data-target').includes('+') || stat.innerText.includes('+') ? '+' : '');
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target.toLocaleString() + (stat.getAttribute('data-target').includes('+') || stat.innerText.includes('+') ? '+' : '');
                }
            };
            updateCount();
        });
        animated = true;
    };

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats();
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
});
