// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.style.display = 'none';
  });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple form validation
    if (name.trim() && email.trim() && message.trim()) {
      // Show success message
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '✓ Message Sent!';
      submitBtn.style.background = '#10b981';
      
      // Reset form after 2 seconds
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
      }, 2000);
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Scroll animation for skill bars
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideIn 0.5s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach((card) => {
  observer.observe(card);
});

// Add scroll animation for skill progress bars
window.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
    }
  });
});

// Add CSS animation for elements
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animated {
    animation: slideIn 0.6s ease forwards !important;
  }
`;
document.head.appendChild(style);