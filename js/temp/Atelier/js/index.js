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

    // ====================================================
    // SKETCH-TO-SUIT TIMELINE SEQUENCER & LOOPING ENGINE
    // ====================================================
    const hero = document.getElementById('home1');
    const suitWrapper = document.querySelector('.suit-3d-wrapper');
    const particlesCanvas = document.getElementById('hero-particles');

    if (hero) {
        // Initialize SVG Outlines (Pencil Sketch & Golden Threads)
        const sketchPaths = {
            collar: document.getElementById('sketch-collar'),
            lapelL: document.getElementById('sketch-lapel-l'),
            lapelR: document.getElementById('sketch-lapel-r'),
            sleeveL: document.getElementById('sketch-sleeve-l'),
            sleeveR: document.getElementById('sketch-sleeve-r'),
            pocket: document.getElementById('sketch-pocket'),
            buttons: document.getElementById('sketch-buttons')
        };

        const threadPaths = document.querySelectorAll('.thread-path');
        const blueprintMarks = document.querySelector('.blueprint-marks');
        const goldenThreadsGroup = document.querySelector('.golden-threads');
        
        // Measure and setup path lengths for 60fps draw-in animation
        const setupPath = (path) => {
            if (!path) return 0;
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            return length;
        };

        const pathLengths = {};
        for (const [key, path] of Object.entries(sketchPaths)) {
            pathLengths[key] = setupPath(path);
        }

        threadPaths.forEach(setupPath);

        const titleWords = document.querySelectorAll('.hero-title .word');
        const descGroup = document.querySelector('.hero-desc-group');
        const buttonGroup = document.querySelector('.hero-btns');

        // Loop control variable references
        let timelineTimeouts = [];
        let isTimelineActive = false;
        let targetRotX = 0;
        let targetRotY = 0;
        let currentRotX = 0;
        let currentRotY = 0;

        const clearTimeline = () => {
            timelineTimeouts.forEach(clearTimeout);
            timelineTimeouts = [];
        };

        const resetToSketch = () => {
            // Remove state classes
            hero.classList.remove('state-blueprint', 'state-atelier', 'state-suit', 'state-zoom', 'state-wobble');
            
            // Reset text reveals
            titleWords.forEach(word => word.classList.remove('revealed'));
            if (descGroup) descGroup.classList.remove('revealed');
            if (buttonGroup) buttonGroup.classList.remove('revealed');

            // Reset path offsets
            for (const [key, path] of Object.entries(sketchPaths)) {
                if (path) {
                    path.style.transition = 'none';
                    path.style.strokeDashoffset = pathLengths[key];
                }
            }
            threadPaths.forEach(path => {
                path.style.transition = 'none';
                path.style.strokeDashoffset = path.style.strokeDasharray;
            });

            // Reset blueprint & golden threads opacity
            if (blueprintMarks) blueprintMarks.style.opacity = '0';
            if (goldenThreadsGroup) {
                goldenThreadsGroup.style.opacity = '0';
                goldenThreadsGroup.style.transition = 'none';
            }

            const sketchOverlay = document.querySelector('.layer-sketch');
            if (sketchOverlay) {
                sketchOverlay.style.opacity = '1';
                sketchOverlay.style.transition = 'none';
            }

            // Disable cursor interaction during redraws
            isTimelineActive = false;
            targetRotX = 0;
            targetRotY = 0;
        };

        const startTimeline = () => {
            clearTimeline();
            resetToSketch();

            // Scene 1: Title Words
            titleWords.forEach((word, index) => {
                const t = setTimeout(() => {
                    word.classList.add('revealed');
                }, 300 + index * 180);
                timelineTimeouts.push(t);
            });

            const tDesc = setTimeout(() => {
                if (descGroup) descGroup.classList.add('revealed');
            }, 300 + titleWords.length * 180 + 200);
            timelineTimeouts.push(tDesc);

            const tBtns = setTimeout(() => {
                if (buttonGroup) buttonGroup.classList.add('revealed');
            }, 300 + titleWords.length * 180 + 500);
            timelineTimeouts.push(tBtns);

            // Scene 2: Drawing lines
            const setAnimatePath = (path, duration, delay) => {
                if (!path) return;
                const t = setTimeout(() => {
                    path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
                    path.style.strokeDashoffset = '0';
                }, delay);
                timelineTimeouts.push(t);
            };

            setAnimatePath(sketchPaths.collar, 800, 500);
            setAnimatePath(sketchPaths.lapelL, 1000, 1000);
            setAnimatePath(sketchPaths.lapelR, 1000, 1000);
            setAnimatePath(sketchPaths.sleeveL, 1100, 1600);
            setAnimatePath(sketchPaths.sleeveR, 1100, 1600);
            setAnimatePath(sketchPaths.pocket, 600, 2400);
            setAnimatePath(sketchPaths.buttons, 600, 2700);

            // Scene 3: Measurement blueprint lines
            const tBlueprint = setTimeout(() => {
                hero.classList.add('state-blueprint');
                if (blueprintMarks) {
                    blueprintMarks.style.transition = 'opacity 1.2s ease-in-out';
                    blueprintMarks.style.opacity = '1';
                }
            }, 3800);
            timelineTimeouts.push(tBlueprint);

            // Scene 4: Golden Thread Trace & 3D Materialization
            const tThreads = setTimeout(() => {
                if (goldenThreadsGroup) {
                    goldenThreadsGroup.style.transition = 'opacity 0.6s ease';
                    goldenThreadsGroup.style.opacity = '1';
                }

                threadPaths.forEach(path => {
                    path.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.25, 1, 0.5, 1)';
                    path.style.strokeDashoffset = '0';
                });

                if (blueprintMarks) {
                    blueprintMarks.style.transition = 'opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
                    blueprintMarks.style.opacity = '0';
                }

                hero.classList.add('state-atelier');
                hero.classList.add('state-suit');
            }, 4800);
            timelineTimeouts.push(tThreads);

            // Scene 6: Zoom-in & spotlight sweep
            const tZoom = setTimeout(() => {
                hero.classList.add('state-zoom');
                const sketchOverlay = document.querySelector('.layer-sketch');
                if (sketchOverlay) {
                    sketchOverlay.style.transition = 'opacity 2s ease';
                    sketchOverlay.style.opacity = '0';
                }
            }, 7200);
            timelineTimeouts.push(tZoom);

            // Parallax active
            const tParallaxActive = setTimeout(() => {
                isTimelineActive = true;
            }, 7000);
            timelineTimeouts.push(tParallaxActive);

            // Scene 7 & 8: Wobble floats, natural flutters
            const tWobble = setTimeout(() => {
                hero.classList.add('state-wobble');
            }, 9500);
            timelineTimeouts.push(tWobble);

            // Loop reset trigger (at 16.5 seconds from start)
            // Fades elements back to paper sketch style, waits 2 seconds, then restarts
            const tLoopReset = setTimeout(() => {
                // Fade out suit layers and return to paper state
                hero.classList.remove('state-suit', 'state-atelier', 'state-zoom', 'state-wobble', 'state-blueprint');
                
                // 2 seconds gap before drawing restarts
                const tLoopRestart = setTimeout(() => {
                    startTimeline();
                }, 2000);
                timelineTimeouts.push(tLoopRestart);
            }, 16500);
            timelineTimeouts.push(tLoopReset);
        };

        // Start the sequence
        startTimeline();

        // Mouse Parallax movement listener
        hero.addEventListener('mousemove', (e) => {
            if (!isTimelineActive || !suitWrapper) return;
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            
            targetRotY = x * 8;
            targetRotX = -y * 6;
        });

        hero.addEventListener('mouseleave', () => {
            targetRotX = 0;
            targetRotY = 0;
        });

        const updateSuitParallax = () => {
            if (suitWrapper) {
                const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                const multiplier = isRTL ? -1 : 1;

                currentRotX += (targetRotX - currentRotX) * 0.08;
                currentRotY += (targetRotY * multiplier - currentRotY) * 0.08;

                suitWrapper.style.setProperty('--rot-x', `${currentRotX.toFixed(2)}deg`);
                suitWrapper.style.setProperty('--rot-y', `${currentRotY.toFixed(2)}deg`);
            }
            requestAnimationFrame(updateSuitParallax);
        };
        requestAnimationFrame(updateSuitParallax);
    }

    // --- MAGNETIC BUTTONS PHYSICS ---
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            
            // Magnetic attraction factor (pulls button 35% towards cursor offset)
            btn.style.transform = `translate(${mouseX * 0.35}px, ${mouseY * 0.35}px) translateY(-3px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // --- PREMIUM AMBIENT PARTICLES (GOLD DUST) ---
    if (particlesCanvas && hero) {
        const ctx = particlesCanvas.getContext('2d');
        let width = particlesCanvas.width = hero.offsetWidth;
        let height = particlesCanvas.height = hero.offsetHeight;

        window.addEventListener('resize', () => {
            if (hero && particlesCanvas) {
                width = particlesCanvas.width = hero.offsetWidth;
                height = particlesCanvas.height = hero.offsetHeight;
            }
        });

        // Scene 9: Soft sparse golden dust particles
        const particleCount = 15; 
        const particles = [];

        class GoldDustParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height + 10;
                this.size = Math.random() * 1.5 + 0.3; // Tiny, sophisticated specks
                this.speedY = -(Math.random() * 0.22 + 0.05); // Slow upward float
                this.speedX = (Math.random() * 0.14 - 0.07); // Subtle drift
                this.alpha = 0;
                this.maxAlpha = Math.random() * 0.3 + 0.05; // Very soft glow, no sparkle
                this.fadeSpeed = Math.random() * 0.003 + 0.001;
                this.wobble = Math.random() * 100;
                this.wobbleSpeed = Math.random() * 0.015 + 0.005;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.wobble) * 0.08;
                this.wobble += this.wobbleSpeed;

                if (this.alpha < this.maxAlpha) {
                    this.alpha += this.fadeSpeed;
                }

                // Fade out near boundary thresholds
                if (this.y < 30 || this.x < 0 || this.x > width) {
                    this.alpha -= 0.012;
                    if (this.alpha <= 0) {
                        this.reset();
                        this.y = height - 10;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`; // Accent gold dust
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            const p = new GoldDustParticle();
            p.y = Math.random() * height;
            p.alpha = Math.random() * p.maxAlpha;
            particles.push(p);
        }

        const animateGoldDust = () => {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animateGoldDust);
        };
        animateGoldDust();
    }
});
