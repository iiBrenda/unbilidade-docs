// ============================================
// UNBILIDADE - NEON TECHNOLOGY EFFECTS
// ============================================

// Efeito de digitação no título principal
(function typingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && !heroTitle.hasAttribute('data-typed')) {
        const originalText = heroTitle.innerText;
        heroTitle.setAttribute('data-typed', 'true');
        heroTitle.innerText = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.innerText += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }
})();

// Contador animado para as estatísticas
(function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element) => {
        const target = parseInt(element.innerText.replace(/[^0-9]/g, ''));
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.innerText = Math.floor(current) + (element.innerText.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.innerText = target + (element.innerText.includes('%') ? '%' : '');
            }
        };
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
})();

// Efeito de matrix rain no fundo (opcional)
(function matrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.05';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00f3ff';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Desativar matrix rain em dispositivos lentos
    if (window.innerWidth > 768) {
        setInterval(draw, 50);
    }
})();

// Efeito de glow nos cards ao passar o mouse
(function cardGlow() {
    const cards = document.querySelectorAll('.card, .feature-item, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
})();

// Detectar e exibir metadata do sistema
(function systemInfo() {
    const infoDiv = document.createElement('div');
    infoDiv.style.cssText = `
        position: fixed;
        bottom: 10px;
        left: 10px;
        font-family: monospace;
        font-size: 10px;
        color: rgba(0, 243, 255, 0.5);
        z-index: 1000;
        background: rgba(0,0,0,0.5);
        padding: 4px 8px;
        border-radius: 8px;
        backdrop-filter: blur(5px);
    `;
    infoDiv.innerHTML = `
        <span>⚡ UnBilidade v1.0</span> |
        <span>🖥️ ${navigator.platform}</span> |
        <span>🌐 ${navigator.language}</span>
    `;
    document.body.appendChild(infoDiv);
})();

// Botão flutuante de "Topo" com efeito neon
(function floatingBackToTop() {
    const btn = document.createElement('div');
    btn.innerHTML = '▲';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: rgba(0, 243, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid var(--neon-cyan, #00f3ff);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--neon-cyan, #00f3ff);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(0, 243, 255, 0.4)';
        btn.style.boxShadow = '0 0 20px var(--neon-cyan, #00f3ff)';
        btn.style.transform = 'scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(0, 243, 255, 0.2)';
        btn.style.boxShadow = 'none';
        btn.style.transform = 'scale(1)';
    });
})();