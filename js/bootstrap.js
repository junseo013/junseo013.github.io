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
