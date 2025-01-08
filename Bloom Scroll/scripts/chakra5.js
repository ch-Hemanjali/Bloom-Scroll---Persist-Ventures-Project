document.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      const position = feature.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 50) {
        feature.style.transform = 'translateY(0)';
        feature.style.opacity = '1';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(30px)';
    });
  });
  