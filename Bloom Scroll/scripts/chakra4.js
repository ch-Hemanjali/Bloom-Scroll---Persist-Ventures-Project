document.addEventListener('scroll', () => {
    const gallery = document.querySelector('.image-gallery');
    const galleryTop = gallery.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (galleryTop < windowHeight - 100) {
      gallery.classList.add('visible');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.image-card');
    cards.forEach((card, index) => {
      card.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.2}s forwards`;
    });
  });
  