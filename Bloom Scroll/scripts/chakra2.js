// Simple scroll effects for content reveal
window.addEventListener('scroll', function() {
    const impactSection = document.querySelector('.impact-section');
    const sectionPosition = impactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Trigger effect when the section is in view
    if (sectionPosition < windowHeight - 100) {
      impactSection.classList.add('visible');
    }
  });
  