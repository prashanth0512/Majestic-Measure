document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('open')) {
                    other.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-msg');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalHtml;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                successMsg.classList.remove('hidden');
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }
    const mapPin = document.querySelector('.map-pin');
    if (mapPin) {
        mapPin.addEventListener('click', () => {
            window.open('https://www.google.com/maps/search/?api=1&query=Techechos+Innovation+Jayasudha+Heights+100+Feet+Road+Madhapur+Hyderabad+Telangana', '_blank');
        });
    }
const animConfig = [
        { selector: '.left-animation', activeClass: 'slide-in-left' },
        { selector: '.right-animation', activeClass: 'slide-in-right' },
        { selector: '.slide-up-animation', activeClass: 'slide-up-active' },
        { selector: '.scale-up-animation', activeClass: 'scale-up-active' },
        { selector: '.fade-in-animation', activeClass: 'fade-in-active' }
    ];
    const style = document.createElement('style');
    style.textContent = `
        .slide-in-left { opacity: 1; transform: translateX(0); animation: slideInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
        .slide-in-right { opacity: 1; transform: translateX(0); animation: slideInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
        .slide-up-active { opacity: 1; transform: translateY(0); animation: slideUp 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
        .scale-up-active { opacity: 1; transform: scale(1); animation: scaleUp 1.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
        .fade-in-active { opacity: 1; animation: fadeIn 1.5s ease forwards; }
        .delay-1 { animation-delay: 0.3s !important; }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
    `;
    document.head.appendChild(style);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animConfig.forEach(config => {
                    if (entry.target.matches(config.selector)) {
                        entry.target.classList.add(config.activeClass);
                        observer.unobserve(entry.target);
                    }
                });
            }
        });
    }, { threshold: 0.15 });
    const isMobile = window.innerWidth <= 640;
    if (!isMobile) {
        animConfig.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            elements.forEach(el => observer.observe(el));
        });
    }
});
