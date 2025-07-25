// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Section entrance animation on scroll
const animatedSections = document.querySelectorAll('section, article');
const animateOnScroll = () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('animate-fade-in');
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// New controlled typing effect for hero lines
const lines = [
  { id: 'hero-line-1', delay: 400 },
  { id: 'hero-line-2', delay: 1000 },
  { id: 'hero-line-3', delay: 1800 }
];

lines.forEach(({ id, delay }) => {
  const el = document.getElementById(id);
  if (el) {
    const fullText = el.textContent;
    el.textContent = '';
    let i = 0;
    setTimeout(function type() {
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }, delay);
  }
}); 