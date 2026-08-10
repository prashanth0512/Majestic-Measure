document.addEventListener('DOMContentLoaded', () => {

    const slideItems = document.querySelectorAll('.slide-in-left');
    slideItems.forEach(item => {
        item.classList.add('active');
    });

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.01
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
    // Gallery Filter Tab Logic
    const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    if (filterBtns.length && galleryItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = '';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 20);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }
});
