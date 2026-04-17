document.addEventListener('DOMContentLoaded', () => {
    const isInsidePages = window.location.pathname.includes('/pages/');
    const rootPath = isInsidePages ? '../' : '';


    
    const headerHTML = `
    <header id="main-header">
        <nav class="container">
            <div class="logo">
                <a href="ROOT_PATHindex.html">
                    <div class="logo-icon">▲</div>
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
                <a href="ROOT_PATHpages/blogs.html" class="nav-item-journal">JOURNAL</a>
                <a href="ROOT_PATHpages/contact.html" class="nav-item-contact">CONTACT</a>
                <a href="ROOT_PATHpages/dashboard.html" class="nav-item-dashboard">DASHBOARD</a>
                <div class="mobile-auth">
                    <a href="ROOT_PATHpages/signup.html" class="icon-btn" aria-label="Account">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>   
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </a>
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
        <div class="container footer-grid">
            <div class="footer-brand">
                <div class="logo">
                    <a href="ROOT_PATHindex.html">
                        <div class="logo-icon">▲</div>
                        <div class="logo-text">Majestic<span>Measure</span></div>
                    </a>
                </div>
                <p>Crafting bespoke garments of distinction since 2015. Where tradition meets precision, and every stitch tells your story.</p>
                <div class="social-links">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer-nav">
                <h4>NAVIGATE</h4>
                <ul>
                    <li><a href="ROOT_PATHindex.html">Home</a></li>
                    <li><a href="ROOT_PATHpages/about.html">About Us</a></li>
                    <li><a href="ROOT_PATHpages/services.html">Our Services</a></li>
                    <li><a href="ROOT_PATHpages/blogs.html">The Journal</a></li>
                    <li><a href="ROOT_PATHpages/contact.html">Contact</a></li>
                    <li><a href="#">Client Portal</a></li>
                </ul>
            </div>
            <div class="footer-services">
                <h4>SERVICES</h4>
                <ul>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=bespoke-suits">Bespoke Suits</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=wedding-suits">Wedding Suits</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=custom-shirts">Custom Shirts</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=alterations">Alterations</a></li>
                    <li><a href="ROOT_PATHpages/service-detail.html?service=styling-consultation">Styling Consultation</a></li>
                </ul>
            </div>
            <div class="footer-extra">
                <h4>ADDITIONAL PAGES</h4>
                <ul>
                    <li><a href="ROOT_PATHpages/coming-soon.html">COMING SOON PAGE</a></li>
                    <li><a href="ROOT_PATHpages/404.html">404 PAGE</a></li>
                </ul>
            </div>
            <div class="footer-visit">
                <h4>VISIT US</h4>
                <p><i class="fa-solid fa-location-dot"></i> Jayasudha heights, <br>100feet Road, Madhapur <br>Hyderabad, Telangana - 500081</p>
                <p><i class="fa-solid fa-phone"></i> +91 9876543210</p>
                <p><i class="fa-solid fa-envelope"></i> [EMAIL_ADDRESS]</p>
                <p class="hours">Mon-Fri: 9am – 7pm<br>Sat: 10am – 5pm<br>Sun: By appointment</p>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container bottom-flex">
                <p>&copy; 2026 Majestic Measure. All rights reserved.</p>
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
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
        if (!document.querySelector("link[rel*='icon']")) {
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/svg+xml';
            favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%23d4a373'>▲</text></svg>";
            document.head.appendChild(favicon);
        }
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
                    btn.innerHTML = '<i class="fa-regular fa-moon"></i>';
                });
            } else {
                document.body.classList.remove('light-mode');
                themeToggles.forEach(btn => {
                    btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
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
