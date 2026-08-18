document.addEventListener('DOMContentLoaded', () => {
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
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const savedTheme = localStorage.getItem('maison_theme') || 'light';
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggles.forEach(btn => btn.innerHTML = '<i class="fa-solid fa-sun"></i>');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggles.forEach(btn => btn.innerHTML = '<i class="fa-solid fa-moon"></i>');
        }
        localStorage.setItem('maison_theme', theme);
    };
    applyTheme(savedTheme);
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
        });
    });
    const sidebar        = document.getElementById('sidebar');
    const mainWrapper    = document.getElementById('mainWrapper');
    const hamburger      = document.getElementById('hamburger');
    const closeSidebar   = document.getElementById('closeSidebar');
    const overlay        = document.getElementById('sidebarOverlay');
    const profileBtn     = document.getElementById('profileBtn');
    const profileDrop    = document.getElementById('profileDropdown');
    const contentArea    = document.getElementById('contentArea');
    const navItems       = document.querySelectorAll('.nav-item');
    const isMobile = () => window.innerWidth <= 1024;
    hamburger.addEventListener('click', () => {
        if (isMobile()) {
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        } else {
            sidebar.classList.toggle('closed');
            mainWrapper.classList.toggle('expanded');
        }
    });
    closeSidebar.addEventListener('click', () => {
        if (isMobile()) {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        } else {
            sidebar.classList.add('closed');
            mainWrapper.classList.add('expanded');
        }
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    });
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDrop.classList.toggle('open');
    });
    document.addEventListener('click', () => profileDrop.classList.remove('open'));
    profileDrop.addEventListener('click', (e) => e.stopPropagation());
    document.querySelectorAll('.dropdown-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const s = item.dataset.section;
            profileDrop.classList.remove('open');
            switchSection(s);
        });
    });
    let currentChart = null;
    const templateMap = {
        overview:      'tpl-overview',
        appointments:  'tpl-appointments',
        measurements:  'tpl-measurements',
        fabrics:       'tpl-fabrics',
        progress:      'tpl-progress',
        orders:        'tpl-orders',
        messages:      'tpl-messages',
        notifications: 'tpl-notifications',
        profile:       'tpl-profile',
    };
    function switchSection(sectionId) {
        const tplId = templateMap[sectionId];
        if (!tplId) return;
        if (currentChart) { currentChart.destroy(); currentChart = null; }
        const tpl = document.getElementById(tplId);
        if (!tpl) return;
        contentArea.innerHTML = '';
        contentArea.appendChild(tpl.content.cloneNode(true));
        contentArea.scrollTo(0, 0);
        navItems.forEach(n => n.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
        if (activeNav) activeNav.classList.add('active');
        if (sectionId === 'overview') {
            initOverviewChart();
            initCategoryChart();
        }
        if (sectionId === 'measurements')  initMeasurements();
        if (sectionId === 'fabrics')       initFabrics();
        if (isMobile()) {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        }
    }
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(item.dataset.section);
        });
    });
    function initOverviewChart() {
        const ctx = document.getElementById('ordersChart');
        if (!ctx) return;
        const isDark = document.body.classList.contains('dark-mode');
        const textColor = isDark ? '#ffffff' : '#111111';
        const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
        currentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Monthly Spend ($)',
                    data: [1850, 2400, 3100, 2200, 3850, 4250],
                    backgroundColor: 'rgba(212, 163, 115, 0.85)',
                    borderRadius: 8,
                    borderSkipped: false,
                    hoverBackgroundColor: '#d4a373'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    title: { display: true, text: 'Monthly Tailoring Spend ($)', color: textColor, font: { family: 'Playfair Display', size: 15, weight: '600' } },
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) { return ' Invested: $' + context.raw.toLocaleString(); }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { 
                            font: { family: 'Montserrat', size: 11 }, 
                            color: isDark ? '#aaaaaa' : '#666666',
                            callback: function(val) { return '$' + val; }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Montserrat', size: 11 }, color: isDark ? '#aaaaaa' : '#666666' }
                    }
                }
            }
        });
    }
    function initCategoryChart() {
        const ctx = document.getElementById('categoryChart');
        if (!ctx) return;
        const isDark = document.body.classList.contains('dark-mode');
        const textColor = isDark ? '#ffffff' : '#111111';
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Bespoke Suits', 'Ceremonial', 'Custom Shirts', 'Alterations'],
                datasets: [{
                    data: [65, 20, 10, 5],
                    backgroundColor: [
                        '#d4a373',
                        '#2c241d',
                        '#8b6914',
                        '#f3d5b5'
                    ],
                    borderWidth: 2,
                    borderColor: isDark ? '#1a1a1a' : '#ffffff',
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Portfolio Allocation', color: textColor, font: { family: 'Playfair Display', size: 15, weight: '600' } },
                    legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 11 }, color: textColor, padding: 14 } }
                },
                cutout: '68%'
            }
        });
    }
    function initMeasurements() {
        const btn = document.getElementById('saveMeasurementsBtn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            btn.textContent = '✔ Saved!';
            btn.style.background = '#27ae60';
            setTimeout(() => {
                btn.textContent = 'Save Changes';
                btn.style.background = '';
            }, 2000);
        });
    }
    function initFabrics() {
        const filters = document.querySelectorAll('.filter-btn');
        const cards   = document.querySelectorAll('.fabric-card');
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.textContent.trim();
                cards.forEach(card => {
                    const catEl = card.querySelector('.fabric-cat');
                    if (cat === 'All' || (catEl && catEl.textContent.trim() === cat)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        document.querySelectorAll('.btn-select').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.textContent = btn.textContent === 'Select' ? '✔ Selected' : 'Select';
                btn.classList.toggle('selected');
            });
        });
    }
    switchSection('overview');
});
