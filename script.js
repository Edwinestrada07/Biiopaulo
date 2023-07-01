//Este código crea un deslizador simple con tres imágenes
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

//Para la galería de fotos
function expandPhoto(img) {
  const modal = document.getElementById('modal');
  const expandedImg = document.getElementById('expandedImg');
  
  expandedImg.src = img.src;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}








