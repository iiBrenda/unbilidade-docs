// ============================================
// UNBILIDADE - CLÍNICA DE FISIOTERAPIA EFFECTS
// Elementos que se movem, animações suaves
// ============================================

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ANIMAÇÃO DOS NÚMEROS (Stat Cards)
    const animateNumbers = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        const animate = (element) => {
            const target = parseInt(element.innerText.replace(/[^0-9]/g, ''));
            if (isNaN(target)) return;
            
            let current = 0;
            const increment = target / 50;
            const update = () => {
                current += increment;
                if (current < target) {
                    element.innerText = Math.floor(current) + (element.innerText.includes('%') ? '%' : '');
                    requestAnimationFrame(update);
                } else {
                    element.innerText = target + (element.innerText.includes('%') ? '%' : '');
                }
            };
            update();
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    };
    
    // 2. BOTÃO FLUTUANTE "VOLTA AO TOPO"
    const createFloatingButton = () => {
        const btn = document.createElement('div');
        btn.className = 'btn-floating';
        btn.innerHTML = '↑';
        btn.setAttribute('data-tooltip', 'Voltar ao topo');
        document.body.appendChild(btn);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };
    
    // 3. EFEITO DE PARALLAX SUAVE
    const parallaxEffect = () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.1}px)`;
                hero.style.opacity = 1 - (scrolled * 0.002);
            }
        });
    };
    
    // 4. ANIMAÇÃO DE ENTRADA DOS CARDS (Scroll Reveal)
    const revealCards = () => {
        const cards = document.querySelectorAll('.card, .feature-item, .stat-card, .grid > div');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    };
    
    // 5. ONDAS INTERATIVAS NO BACKGROUND
    const createInteractiveWaves = () => {
        const waveContainer = document.createElement('div');
        waveContainer.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            pointer-events: none;
            z-index: 0;
        `;
        waveContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute; bottom: 0; width: 100%;">
                <path fill="#4CAF50" fill-opacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,224C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        `;
        document.body.appendChild(waveContainer);
        
        // Animar a onda
        let angle = 0;
        setInterval(() => {
            angle += 0.02;
            const wave = waveContainer.querySelector('path');
            if (wave) {
                const y = Math.sin(angle) * 10;
                wave.style.transform = `translateY(${y}px)`;
            }
        }, 100);
    };
    
    // 6. EFEITO DE GLOW NOS LINKS
    const addLinkGlow = () => {
        const links = document.querySelectorAll('.md-nav__link, .md-tabs__link');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transition = 'all 0.3s ease';
                link.style.textShadow = '0 0 8px rgba(76, 175, 80, 0.5)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.textShadow = 'none';
            });
        });
    };
    
    // 7. RELÓGIO DE SESSÃO (pequeno detalhe interativo)
    const addSessionClock = () => {
        const clock = document.createElement('div');
        clock.style.cssText = `
            position: fixed;
            bottom: 10px;
            left: 10px;
            font-family: monospace;
            font-size: 11px;
            color: rgba(76, 175, 80, 0.6);
            background: rgba(255,255,255,0.8);
            padding: 4px 10px;
            border-radius: 20px;
            backdrop-filter: blur(5px);
            z-index: 1000;
            pointer-events: none;
        `;
        
        function updateClock() {
            const now = new Date();
            clock.innerHTML = `🕐 ${now.toLocaleTimeString('pt-BR')} | 🌿 UnBilidade`;
        }
        
        updateClock();
        setInterval(updateClock, 1000);
        document.body.appendChild(clock);
    };
    
    // 8. ANIMAÇÃO DE PROGRESSO DAS BARRAS
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => observer.observe(bar));
    };
    
    // 9. EFEITO DE FOLLOW NO MOUSE (elementos flutuantes)
    const addMouseFollow = () => {
        const follower = document.createElement('div');
        follower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, rgba(76,175,80,0.2), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(follower);
        
        document.addEventListener('mousemove', (e) => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });
    };
    
    // 10. DIGITAÇÃO NO TÍTULO PRINCIPAL
    const typeWriterEffect = () => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle && !heroTitle.hasAttribute('data-typed')) {
            const originalText = heroTitle.innerText;
            heroTitle.setAttribute('data-typed', 'true');
            heroTitle.innerText = '';
            
            let i = 0;
            function type() {
                if (i < originalText.length) {
                    heroTitle.innerText += originalText.charAt(i);
                    i++;
                    setTimeout(type, 80);
                }
            }
            type();
        }
    };
    
    // EXECUTAR TODOS OS EFEITOS
    animateNumbers();
    createFloatingButton();
    parallaxEffect();
    revealCards();
    createInteractiveWaves();
    addLinkGlow();
    addSessionClock();
    animateProgressBars();
    addMouseFollow();
    typeWriterEffect();
    
    console.log('🌿 UnBilidade - Efeitos interativos carregados com sucesso!');
});