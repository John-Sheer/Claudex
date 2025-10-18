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
        welcome.textContent = 'Bienvenue chez nous!!!...🍻';
        Object.assign(welcome.style, {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'red',
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


        // Animation d’entrée pour bb.html et SNB.html
        document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;


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

document.addEventListener('DOMContentLoaded', () => {
  const texte = document.querySelector('.texte-attention');
  if (!texte || texte === document.body || texte === document.documentElement) return;

  let inner = texte.querySelector('.texte-attention-inner');
  if (!inner) {
    inner = document.createElement('span');
    inner.className = 'texte-attention-inner';
    inner.innerHTML = texte.innerHTML;

    if (getComputedStyle(texte).position === 'static') {
      texte.style.position = 'relative';
    }

    texte.innerHTML = '';
    texte.appendChild(inner);
  }

  Object.assign(inner.style, {
    display: 'inline-block',
    transformOrigin: 'center',
    transition: 'transform 0.4s ease, text-shadow 0.4s ease',
    willChange: 'transform, text-shadow'
  });

  let toggled = false;
  const intervalMs = 1000;

  setInterval(() => {
    if (toggled) {
      inner.style.transform = 'scale(1)';
      inner.style.textShadow = `
        0 0 5px white,
        0 0 10px white,
        0 0 15px white
      `;
    } else {
      inner.style.transform = 'scale(1.08)';
      inner.style.textShadow = `
        0 0 10px white,
        0 0 20px white,
        0 0 30px limegreen
      `;
    }
    toggled = !toggled;
  }, intervalMs);
});

// Fonction de filtrage des boissons par nom ou prix
document.addEventListener('DOMContentLoaded', () => {
  const champ = document.getElementById('champ-recherche');
  champ.addEventListener('input', () => {
    const terme = champ.value.toLowerCase().trim();
    const boissons = document.querySelectorAll('.boisson');
    boissons.forEach(boisson => {
      const nom = boisson.querySelector('h3')?.textContent.toLowerCase() || '';
      const prix = boisson.querySelector('p')?.textContent.toLowerCase() || '';
      boisson.style.display = (nom.includes(terme) || prix.includes(terme)) ? 'block' : 'none';
    });
  });
});




