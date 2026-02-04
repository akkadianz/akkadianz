// Responsive navigation toggle for all pages
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    const navId = btn.getAttribute('aria-controls');
    const nav = document.getElementById(navId);
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.toggle('open');
      if (nav) nav.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    const openNav = document.querySelector('.nav-links.open');
    const openBtn = document.querySelector('.nav-toggle.open');
    if (!openNav) return;
    if (e.target.closest('.navbar')) return;
    openNav.classList.remove('open');
    if (openBtn) openBtn.classList.remove('open');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  });
});
