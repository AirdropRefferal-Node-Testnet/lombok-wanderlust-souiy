// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formMessage.classList.remove('hidden');
      setTimeout(() => formMessage.classList.add('hidden'), 5000);
      this.reset();
    });
  }
});
