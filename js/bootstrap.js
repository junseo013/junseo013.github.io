function toggleHide(id) {
  const element = document.getElementById(id);
  const copyButton = document.querySelector(`[data-bibtex-id="${id}"]`);
  const toggle = document.querySelector(`[aria-controls="${id}"]`);
  const show = element.style.display === 'none' || element.style.display === '';

  element.style.display = show ? 'block' : 'none';
  copyButton.style.display = show ? 'block' : 'none';
  if (toggle) toggle.setAttribute('aria-expanded', show ? 'true' : 'false');
}

function copyBibtex(id) {
  const bibtex = document.getElementById(id);
  const text = bibtex.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const button = document.querySelector(`[data-bibtex-id="${id}"]`);
    button.textContent = 'Copied!';

    setTimeout(() => {
      button.textContent = 'Copy';
    }, 1000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Scroll spy for active nav link
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.top-bar nav a');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    let currentSection = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
});
