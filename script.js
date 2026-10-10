const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = contactForm.querySelector('button');
  button.textContent = 'Message Sent';
  button.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    button.textContent = 'Send Message';
    button.disabled = false;
  }, 1800);
});
