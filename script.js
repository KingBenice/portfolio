const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Mobile menu: toggle a CSS class instead of injecting inline styles
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // toggle aria-expanded for accessibility
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', (!expanded).toString());
  });
}

// Close mobile menu when clicking a link
navLinks?.querySelectorAll('a')?.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
  });
});

// Simple image guidance: if the profile image is missing, show the initials SVG
const profileVisual = document.getElementById('profileVisual');
const img = profileVisual?.querySelector('img');
if (img) {
  img.addEventListener('error', () => {
    profileVisual.innerHTML = `\n      <svg width="100%" height="100%" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">\n        <rect width="100%" height="100%" fill="#0d5c63"/>\n        <text x="50%" y="55%" text-anchor="middle" font-family="Sora, sans-serif" font-size="64" fill="#d7ebe8">BA</text>\n      </svg>`;
  });
}
