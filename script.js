document.addEventListener('DOMContentLoaded', () => {
  // Vérifie si on est sur la page index.html
  if (document.body.classList.contains('index')) {
    // Animation d’entrée des images
    const images = document.querySelectorAll('.choix-gammes img');
    images.forEach((img, i) => {
      img.style.opacity = '0';
      img.style.transform = 'translateY(30px)';
      setTimeout(() => {
        img.style.transition = 'all 0.6s ease';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });

    // Message de bienvenue temporaire
    const welcome = document.createElement('div');
    welcome.textContent = 'Bienvenue au Bar Claudex 🍻';
    welcome.style.position = 'fixed';
    welcome.style.top = '20px';
    welcome.style.left = '50%';
    welcome.style.transform = 'translateX(-50%)';
    welcome.style.background = 'rgba(0,0,0,0.7)';
    welcome.style.color = 'white';
    welcome.style.padding = '1rem 2rem';
    welcome.style.borderRadius = '10px';
    welcome.style.zIndex = '999';
    welcome.style.fontSize = '1.2rem';
    document.body.appendChild(welcome);

    setTimeout(() => {
      welcome.style.transition = 'opacity 1s ease';
      welcome.style.opacity = '0';
      setTimeout(() => welcome.remove(), 1000);
    }, 3000);
  }
});
