// === Carrossel da seção "valores" ===
const trackValores = document.querySelector('.carrossel-track');
const cardsValores = Array.from(document.querySelectorAll('.carrossel-track .valor-card'));
const btnPrevValores = document.querySelector('.seta.esquerda');
const btnNextValores = document.querySelector('.seta.direita');

let indexValores = 0;

function updateCarouselValores() {
  const visibleCount = 3;
  const cardWidth = cardsValores[0].offsetWidth + 30;
  const maxIndex = cardsValores.length - visibleCount;

  if (indexValores < 0) indexValores = maxIndex;
  if (indexValores > maxIndex) indexValores = 0;

  const offset = indexValores * cardWidth;
  trackValores.style.transform = `translateX(-${offset}px)`;

  cardsValores.forEach((card, i) => {
    card.classList.remove('central');
    card.style.opacity = '0.5';
    card.style.transform = 'scale(0.9)';
  });

  const central = indexValores + 1;
  if (cardsValores[central]) {
    cardsValores[central].classList.add('central');
    cardsValores[central].style.opacity = '1';
    cardsValores[central].style.transform = 'scale(1.1)';
  }
}

btnNextValores.addEventListener('click', () => {
  indexValores++;
  updateCarouselValores();
});

btnPrevValores.addEventListener('click', () => {
  indexValores--;
  updateCarouselValores();
});

updateCarouselValores();


// === Carrossel da seção "certificados" ===
const trackCertificados = document.querySelector('.carrossel-track-certificados');
const cardsCertificados = Array.from(document.querySelectorAll('.certificado-card'));
const btnPrevCert = document.querySelector('.seta-certificada.esquerda');
const btnNextCert = document.querySelector('.seta-certificada.direita');

let indexCert = 0;

function updateCarouselCertificados() {
  const visibleCount = 3;
  const cardWidth = cardsCertificados[0].offsetWidth + 30;
  const maxIndex = cardsCertificados.length - visibleCount;

  if (indexCert < 0) indexCert = maxIndex;
  if (indexCert > maxIndex) indexCert = 0;

  const offset = indexCert * cardWidth;
  trackCertificados.style.transform = `translateX(-${offset}px)`;

  cardsCertificados.forEach((card, i) => {
    card.classList.remove('active');
    card.style.opacity = '0.5';
    card.style.transform = 'scale(0.9)';
    card.style.zIndex = '1';
  });

  const central = indexCert + 1;
  if (cardsCertificados[central]) {
    cardsCertificados[central].classList.add('active');
    cardsCertificados[central].style.opacity = '1';
    cardsCertificados[central].style.transform = 'scale(1.1)';
    cardsCertificados[central].style.zIndex = '2';
  }
}

btnNextCert.addEventListener('click', () => {
  indexCert++;
  updateCarouselCertificados();
});

btnPrevCert.addEventListener('click', () => {
  indexCert--;
  updateCarouselCertificados();
});

setInterval(() => {
  indexCert++;
  updateCarouselCertificados();
}, 7000);

window.addEventListener('load', () => {
    updateCarouselValores();
    updateCarouselCertificados();
  });
