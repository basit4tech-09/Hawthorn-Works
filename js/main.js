// ── Hamburger Menu Toggle ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ── Newsletter Form Feedback ──
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterForm.innerHTML = '<p class="form-success">✅ You\'re subscribed! Welcome to Hawthorn Works.</p>';
});

// ── Contact Form Feedback ──
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.innerHTML = '<p class="form-success">✅ Message received. We\'ll get back to you shortly.</p>';
});
//current year
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}