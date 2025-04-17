// === Carrossel da seção "valores" ===
const trackValores = document.querySelector('.carrossel-wrapper');
const cardsValores = Array.from(document.querySelectorAll('.carrossel-track .valor-card'));
const btnPrevValores = document.querySelector('.seta.esquerda');
const btnNextValores = document.querySelector('.seta.direita');

let indexValores = 0;

function updateCarouselValores() {
  const visibleCount = 3;
  const cardWidth = cardsValores[0].offsetWidth + 30; // margem ou gap entre cards
  const maxIndex = cardsValores.length - visibleCount;

  // Garante que o índice fique dentro do intervalo
  if (indexValores < 0) indexValores = maxIndex;
  if (indexValores > maxIndex) indexValores = 0;

  const offset = indexValores * cardWidth;
  trackValores.style.transition = "transform 0.5s ease"; // Adicionando uma transição suave
  trackValores.style.transform = `translateX(-${offset}px)`;

  // Atualiza os cards com base no índice
  cardsValores.forEach((card, i) => {
    card.classList.remove('central');
    card.style.opacity = '0.5';
    card.style.transform = 'scale(0.9)';
    card.style.zIndex = '1';
  });

  // Calcula o card central considerando o número de cards visíveis
  const centralIndex = indexValores + Math.floor(visibleCount / 2);
  if (cardsValores[centralIndex]) {
    cardsValores[centralIndex].classList.add('central');
    cardsValores[centralIndex].style.opacity = '1';
    cardsValores[centralIndex].style.transform = 'scale(1.05)';
    cardsValores[centralIndex].style.zIndex = '2';
    cardsValores[centralIndex].style.backgroundColor = '#00adcd'; // Mudando a cor do card central
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

  // Garante que o índice fique dentro do intervalo
  if (indexCert < 0) indexCert = maxIndex;
  if (indexCert > maxIndex) indexCert = 0;

  const offset = indexCert * cardWidth;
  trackCertificados.style.transition = "transform 0.5s ease"; // Adicionando uma transição suave
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

// Atualização a cada 7 segundos para o carrossel de certificados
setInterval(() => {
  indexCert++;
  updateCarouselCertificados();
}, 7000);

// Iniciar ao carregar a página
window.addEventListener('load', () => {
  updateCarouselValores();
  updateCarouselCertificados();
});
