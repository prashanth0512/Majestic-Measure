document.addEventListener('DOMContentLoaded', () => {

    const slideItems = document.querySelectorAll('.slide-in-left');
    
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2
    });

    slideItems.forEach(item => {
        slideObserver.observe(item);
    });

    if (window.innerWidth < 640) {
        const buttons = document.querySelectorAll('.explore-btn, .btn');
        buttons.forEach(btn => {
            btn.style.minHeight = '44px';
        });
    }

    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('open');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
            });

            if (!isActive) {
                item.classList.add('open');
            }
        });
    });
});
