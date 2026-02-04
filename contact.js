// Contact page: minimal fade-in on load
document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.content-section.reveal');
  if (section) {
    setTimeout(() => {
      section.classList.add('show');
    }, 150);
  }
});