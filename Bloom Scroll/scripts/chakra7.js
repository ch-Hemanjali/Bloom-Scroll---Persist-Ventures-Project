document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
  
    features.forEach((feature, index) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(30px)';
      setTimeout(() => {
        feature.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
      }, index * 200); // Staggered fade-in effect
    });
  });
  