document.addEventListener('DOMContentLoaded', () => {
    const isInsidePages = window.location.pathname.includes('/pages/');
    const rootPath = isInsidePages ? '../' : '';
const headerHTML = `
    <header id="main-header">
        <nav class="container">
            <div class="logo">
                <a href="ROOT_PATHindex.html">
                    <div class="logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="34" height="34">
                            <rect width="100" height="100" rx="20" fill="#141414" stroke="#d4a373" stroke-width="2.5" />
                            <g fill="#d4a373">
                                <polygon points="50,18 56,25 50,32 44,25" />
                                <polygon points="44,25 24,18 24,32" />
                                <polygon points="56,25 76,18 76,32" />
                            </g>
                            <line x1="50" y1="36" x2="50" y2="84" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
                            <path fill="#ffffff" d="M 40,18 L 8,34 C 13,40 18,44 20,45 L 35,49 C 37,39 39,29 40,18 Z" />
                            <path fill="#ffffff" d="M 10,46 L 36,50 C 42,65 47,80 50,92 C 34,78 18,60 10,46 Z" />
                            <path fill="#ffffff" d="M 60,18 L 92,34 C 87,40 82,44 80,45 L 65,49 C 63,39 61,29 60,18 Z" />
                            <path fill="#ffffff" d="M 90,46 L 64,50 C 58,65 53,80 50,92 C 66,78 82,60 90,46 Z" />
                        </svg>
                    </div>
                    <div class="logo-text">MAJESTIC<span style="font-weight: 100;">MEASURE</span></div>
                </a>
            </div>
            <nav class="nav-links">
                <div class="dropdown">
                    <a href="ROOT_PATHindex.html" class="nav-item-home">HOME <i class="fa-solid fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="ROOT_PATHindex.html">Home 1</a>
                        <a href="ROOT_PATHpages/home2.html">Home 2</a>
                    </div>
                </div>
                <a href="ROOT_PATHpages/about.html" class="nav-item-about">ABOUT</a>
                <a href="ROOT_PATHpages/services.html" class="nav-item-services">SERVICES</a>
                <a href="ROOT_PATHpages/blogs.html" class="nav-item-journal">BLOG</a>
                <a href="ROOT_PATHpages/contact.html" class="nav-item-contact">CONTACT</a>
                <a href="ROOT_PATHpages/dashboard.html" class="nav-item-dashboard">DASHBOARD</a>
                <div class="mobile-menu-actions">
                    <button class="theme-toggle mobile-cta-btn" aria-label="Toggle Theme"><i class="fa-regular fa-sun"></i> <span>Theme</span></button>
                    <button class="rtl-toggle mobile-cta-btn">LTR</button>
                    <a href="ROOT_PATHpages/signup.html" class="mobile-cta-btn mobile-auth-btn" aria-label="Account"><i class="fa-regular fa-user"></i> <span>Login</span></a>
                </div>
            </nav>
            <div class="nav-actions">
                <button class="theme-toggle"><i class="fa-regular fa-sun"></i></button>
                <a href="ROOT_PATHpages/signup.html" class="icon-btn" aria-label="Account">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>   
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </a>
                <button class="rtl-toggle">LTR</button>
                <button class="hamburger" id="mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>
    `;
    const footerHTML = `
    <footer id="main-footer">
        <!-- VIP Newsletter Section -->
        <div class="footer-newsletter-wrapper">
            <div class="container">
                <div class="footer-newsletter">
                    <div class="newsletter-content">
                        <span class="newsletter-badge"><i class="fa-solid fa-crown"></i> VIP ATELIER INSIDER</span>
                        <h3>THE BESPOKE GAZETTE</h3>
                        <p>Subscribe for private fitting invitations, new fabric arrivals, and bespoke tailoring insights.</p>
                    </div>
                    <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for joining the Atelier Circle.');">
                        <div class="input-group">
                            <i class="fa-regular fa-envelope input-icon"></i>
                            <input type="email" placeholder="Enter your email address" required aria-label="Email address for newsletter">
                            <button type="submit" class="btn-subscribe">
                                <span>SUBSCRIBE</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Main Footer Grid -->
        <div class="container footer-grid">
            <!-- Brand Column -->
            <div class="footer-brand">
                <div class="logo">
                    <a href="ROOT_PATHindex.html">
                        <div class="logo-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="34" height="34">
                                <rect width="100" height="100" rx="20" fill="#141414" stroke="#d4a373" stroke-width="2.5" />
                                <g fill="#d4a373">
                                    <polygon points="50,18 56,25 50,32 44,25" />
                                    <polygon points="44,25 24,18 24,32" />
                                    <polygon points="56,25 76,18 76,32" />
                                </g>
                                <line x1="50" y1="36" x2="50" y2="84" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
                                <path fill="#ffffff" d="M 40,18 L 8,34 C 13,40 18,44 20,45 L 35,49 C 37,39 39,29 40,18 Z" />
                                <path fill="#ffffff" d="M 10,46 L 36,50 C 42,65 47,80 50,92 C 34,78 18,60 10,46 Z" />
                                <path fill="#ffffff" d="M 60,18 L 92,34 C 87,40 82,44 80,45 L 65,49 C 63,39 61,29 60,18 Z" />
                                <path fill="#ffffff" d="M 90,46 L 64,50 C 58,65 53,80 50,92 C 66,78 82,60 90,46 Z" />
                            </svg>
                        </div>
                        <div class="logo-text">MAJESTIC<span style="font-weight: 100;">MEASURE</span></div>
                    </a>
                </div>
                <p class="brand-desc">Bespoke sartorial excellence since 2015. Where master craftsmanship meets modern elegance, and every stitch tells a distinguished story.</p>
                <div class="heritage-seal">
                    <i class="fa-solid fa-certificate"></i>
                    <span>Savile Row Craftsmanship Standard</span>
                </div>
                <div class="social-links">
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <!-- Navigation Column -->
            <div class="footer-nav">
                <h4>EXPLORE ATELIER</h4>
                <ul>
                    <li><a href="ROOT_PATHindex.html">Home</a></li>
                    <li><a href="ROOT_PATHpages/home2.html">Home 2</a></li>
                    <li><a href="ROOT_PATHpages/about.html">About Us</a></li>
                    <li><a href="ROOT_PATHpages/services.html">Our Services</a></li>
                    <li><a href="ROOT_PATHpages/blogs.html">The Journal</a></li>
                    <li><a href="ROOT_PATHpages/contact.html">Contact</a></li>
                    <li><a href="ROOT_PATHpages/dashboard.html">Client Portal</a></li>
                </ul>
            </div>
            <!-- Services Column -->
            <div class="footer-services">
                <h4>SARTORIAL SERVICES</h4>
                <ul>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=bespoke-suits">Bespoke Suits</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=wedding-suits">Wedding Suits</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=custom-shirts">Custom Shirts</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=alterations">Master Alterations</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=styling-consultation">VIP Styling Consultation</a></li>
                    <li><a href="ROOT_PATHpages/coming-soon.html">Private Fittings</a></li>
                </ul>
            </div>
            <!-- Visit Column -->
            <div class="footer-visit">
                <h4>FLAGSHIP ATELIER</h4>
                <div class="contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Jayasudha Heights, 100 Feet Road, Madhapur, Hyderabad - 500081</span>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+919876543210">+91 9876543210</a>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:contact@majesticmeasure.com">contact@majesticmeasure.com</a>
                </div>
                <div class="atelier-hours-card">
                    <div class="hours-header">
                        <span class="status-dot"></span>
                        <span class="hours-title">ATELIER HOURS</span>
                    </div>
                    <div class="hours-list">
                        <div><span>Mon – Sat:</span> 9:00 AM – 7:00 PM</div>
                        <div><span>Sunday:</span> By Private Appointment</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container bottom-flex">
                <p>&copy; 2026 Majestic Measure Atelier. All rights reserved.</p>
                <div class="craft-tagline">
                    <i class="fa-solid fa-scissors"></i> Handcrafted with Precision
                </div>
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <span class="sep">•</span>
                    <a href="#">Terms of Service</a>
                    <span class="sep">•</span>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
    `;
    const injectComponent = (containerId, content) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = content.replaceAll('ROOT_PATH', rootPath);
        }
    };
    injectComponent('header-placeholder', headerHTML);
    injectComponent('footer-placeholder', footerHTML);
    const setFavicon = () => {
        let favicon = document.querySelector("link[rel*='icon']");
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/svg+xml';
            document.head.appendChild(favicon);
        }
        favicon.href = rootPath + 'images/favicon.svg';
    };
    setFavicon();
    initHeaderLogic();
    setActiveLink();
    function initHeaderLogic() {
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        const header = document.getElementById('main-header');
        if (!header) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.classList.toggle('overflow-hidden');
            });
        }
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const parentDropdown = item.parentElement;
                const isDropdownToggle = parentDropdown.classList.contains('dropdown') && item === parentDropdown.children[0];
                if (window.innerWidth <= 1024 && isDropdownToggle) {
                    e.preventDefault();
                    parentDropdown.classList.toggle('active');
                    return; 
                }
                if (mobileToggle) mobileToggle.classList.remove('active');
                if (navLinks) navLinks.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
            });
        });
        const themeToggles = document.querySelectorAll('.theme-toggle');
        const savedTheme = localStorage.getItem('maison_theme') || 'dark';
        const applyTheme = (theme) => {
            if (theme === 'light') {
                document.body.classList.add('light-mode');
                themeToggles.forEach(btn => {
                    if (btn.classList.contains('mobile-cta-btn')) {
                        btn.innerHTML = '<i class="fa-regular fa-moon"></i> <span>Dark</span>';
                    } else {
                        btn.innerHTML = '<i class="fa-regular fa-moon"></i>';
                    }
                });
            } else {
                document.body.classList.remove('light-mode');
                themeToggles.forEach(btn => {
                    if (btn.classList.contains('mobile-cta-btn')) {
                        btn.innerHTML = '<i class="fa-regular fa-sun"></i> <span>Light</span>';
                    } else {
                        btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
                    }
                });
            }
            localStorage.setItem('maison_theme', theme);
        };
        applyTheme(savedTheme);
        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const isLight = document.body.classList.contains('light-mode');
                applyTheme(isLight ? 'dark' : 'light');
            });
        });
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
                const currentDir = document.documentElement.getAttribute('dir');
                applyDir(currentDir === 'ltr' ? 'rtl' : 'ltr');
            });
        });
    }
function setActiveLink() {
        const path = window.location.pathname;
        const page = path.split("/").pop() || 'index.html';
        let activeClass = '';
        if (page === 'index.html' || page === '') activeClass = '.nav-item-home';
        else if (page === 'about.html') activeClass = '.nav-item-about';
        else if (page === 'services.html' || page === 'service-detail.html') activeClass = '.nav-item-services';
        else if (page === 'blogs.html' || page === 'blog-detail.html') activeClass = '.nav-item-journal';
        else if (page === 'contact.html') activeClass = '.nav-item-contact';
        if (activeClass) {
            const link = document.querySelector(activeClass);
            if (link) link.classList.add('active');
        }
    }
});
