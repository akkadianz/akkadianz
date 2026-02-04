// Scroll-based animations for cinematic reveals
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const logoScale = document.querySelector('.logo-scale');

  // Intersection Observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  // Logo scaling on scroll
  if (logoScale) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        logoScale.classList.add('scrolled');
      } else {
        logoScale.classList.remove('scrolled');
      }
    });
  }

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      heroBg.style.transform = `translateY(${scrollTop * 0.5}px)`;
    });
  }
});
