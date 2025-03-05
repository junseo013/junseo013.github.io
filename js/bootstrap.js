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

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeModal();
});
