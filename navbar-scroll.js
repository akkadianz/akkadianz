// Navbar hide/show on scroll with RAF throttling and nav-open guard
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScrollTop = 0;
  const scrollThreshold = 50; // hide only after this
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // if mobile nav is open, keep navbar visible
      const navOpen = document.querySelector('.nav-links.open') || document.querySelector('.nav-toggle.open');
      if (navOpen) {
        navbar.classList.remove('navbar-hidden');
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
        return;
      }

      // scrolling down past threshold -> hide
      if (scrollTop > scrollThreshold && scrollTop > lastScrollTop) {
        navbar.classList.add('navbar-hidden');
      }
      // scrolling up -> show
      else if (scrollTop < lastScrollTop) {
        navbar.classList.remove('navbar-hidden');
      }
      // near top -> always show
      else if (scrollTop <= scrollThreshold) {
        navbar.classList.remove('navbar-hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      ticking = false;
    });
  }

  // Use passive listener for performance
  window.addEventListener('scroll', onScroll, { passive: true });

  // Also reset when resizing/orientation changes
  window.addEventListener('resize', () => { lastScrollTop = window.scrollY || 0; }, { passive: true });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbarScroll);
} else {
  initNavbarScroll();
}
