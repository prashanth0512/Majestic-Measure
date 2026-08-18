document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('newsletter-submit');
            const emailInput = document.getElementById('newsletter-email');
            const originalText = btn.innerText;
            btn.innerText = 'SUBSCRIBED!';
            btn.style.backgroundColor = '#4caf50';
            btn.style.color = '#fff';
            btn.style.borderColor = '#4caf50';
            emailInput.value = '';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 3000);
        });
    }
});
