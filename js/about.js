document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

});
