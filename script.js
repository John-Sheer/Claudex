document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('index')) {
        // Animation d’entrée plus visible
        const images = document.querySelectorAll('.choix-gammes img');
        images.forEach((img, i) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8)';
            setTimeout(() => {
                img.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 500 + i * 300);
        });

        // Message de bienvenue avec fondu
        const welcome = document.createElement('div');
        welcome.textContent = 'Savourez-bien nos produits!!!🍻';
        Object.assign(welcome.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '10px',
            zIndex: '999',
            fontSize: '1.2rem',
            opacity: '0',
            transition: 'opacity 1s ease'
        });
        document.body.appendChild(welcome);
        setTimeout(() => (welcome.style.opacity = '1'), 200);
        setTimeout(() => {
            welcome.style.opacity = '0';
            setTimeout(() => welcome.remove(), 1000);
        }, 4000);
    }
});


        document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;

        // Animation d’entrée pour bb.html et SNB.html
        if (body.classList.contains('gamme-page')) {
            const cards = document.querySelectorAll('.boisson');
            cards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 300 + i * 150);
            });
        }
        });
