// ==============================
// 1. NAVBAR — shrinks on scroll
// ==============================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ==============================
// 2. SCROLL REVEAL ANIMATION
// ==============================

// First, add the 'reveal' class to every section and card
const revealTargets = document.querySelectorAll(
  'section, .skill-card, .project-card, .stat, .strip-stat, .contact-item'
);

revealTargets.forEach(el => {
  el.classList.add('reveal');
});

// Then watch when they enter the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // slight delay per item so they appear one by one
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealTargets.forEach(el => observer.observe(el));


// ==============================
// 3. ACTIVE NAV LINK HIGHLIGHT
// ==============================

const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


// ==============================
// 4. CONTACT FORM — submit handler
// ==============================

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // stop page from reloading

  const fname   = document.getElementById('fname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!fname || !email || !message) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  if (!email.includes('@')) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  // If all good — show success
  showToast('Message sent! I will get back to you within 24 hours.', 'success');
  form.reset();
});


// ==============================
// 5. TOAST NOTIFICATION
// ==============================

function showToast(message, type) {
  // Remove any existing toast first
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  // Create toast element
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.textContent = message;

  document.body.appendChild(toast);

  // Slide it in
  setTimeout(() => toast.classList.add('show'), 10);

  // Slide it out after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}


// ==============================
// 6. TYPING EFFECT — hero title
// ==============================

const typingEl = document.querySelector('.hero-title em');

if (typingEl) {
  const words   = ['Experiences', 'Applications', 'Interfaces', 'Solutions'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Finished typing the word
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1800);  // pause before deleting
      return;
    }

    // Finished deleting the word
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;  // go to next word
    }

    // Speed — faster when deleting
    const speed = isDeleting ? 60 : 100;
    setTimeout(type, speed);
  }

  // Start typing after 1 second
  setTimeout(type, 1000);
}


// ==============================
// 7. SMOOTH SCROLL for nav links
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ==============================
// 8. SKILL CARDS — stagger on load
// ==============================

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
  card.style.transitionDelay = (index * 0.1) + 's';
});
