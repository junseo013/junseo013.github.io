function toggleHide(id) {
  const element = document.getElementById(id);
  const copyButton = document.querySelector(`[data-bibtex-id="${id}"]`);

  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
    copyButton.style.display = 'block';
  } else {
    element.style.display = 'none';
    copyButton.style.display = 'none';
  }
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

// Modal functions
function initializeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementsByClassName("modal-close")[0];

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
}

function openModal(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

// Initialize modal and scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeModal();

  // Scroll fade-in animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Scroll spy for active nav link
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

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});
