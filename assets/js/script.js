function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
