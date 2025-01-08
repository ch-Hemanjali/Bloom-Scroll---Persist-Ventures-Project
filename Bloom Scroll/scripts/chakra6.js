document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200); // Staggered effect
    });
  });
  