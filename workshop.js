// Countdown Timer
function updateCountdown() {
  // Target date: February 18, 2026, 23:59:59
  const targetDate = new Date('2026-02-18T23:59:59').getTime();
  
  function calculate() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM with padded zeros
    const pad = (num) => String(num).padStart(2, '0');
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
    
    // If countdown is over
    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
    }
  }
  
  // Initial calculation
  calculate();
  
  // Update every second
  setInterval(calculate, 1000);
}

// Initialize countdown when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
  updateCountdown();
}

// Workshop page: cyberpunk design enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for register button
  const registerBtn = document.querySelector('.register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', function(e) {
      // Allow natural navigation to tally form
    });
  }

  // Add subtle animation trigger on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  });

  document.querySelectorAll('.focus-item').forEach(item => {
    observer.observe(item);
  });
});