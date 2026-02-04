// Home page: popup timing and interactions
document.addEventListener('DOMContentLoaded', function () {

  /* ===============================
     TYPEWRITER EFFECT
  =============================== */
  const typewriterElement = document.querySelector('.hero-date.typewriter');
  
  if (typewriterElement) {
    const comingEl = typewriterElement.querySelector('.typewriter-coming');
    const soonEl = typewriterElement.querySelector('.typewriter-soon');
    
    let charIndex = 0;
    
    // Animate COMING
    if (comingEl) {
      const comingText = comingEl.textContent;
      comingEl.textContent = '';
      
      comingText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        span.style.animationDelay = `${charIndex * 0.18}s`;
        comingEl.appendChild(span);
        charIndex++;
      });
    }
    
    // Animate SOON
    if (soonEl) {
      const soonText = soonEl.textContent;
      soonEl.textContent = '';
      
      soonText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        span.style.animationDelay = `${charIndex * 0.18}s`;
        soonEl.appendChild(span);
        charIndex++;
      });
    }
  }

});
