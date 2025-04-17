document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada e script.js ativo (institucional)');

  // === Tradução ===
  function setLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
      el.innerText = el.getAttribute(`data-${lang}`);
    });
  }

  window.setLanguage = setLanguage;

  // Aplica o idioma salvo
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);

  // === Carrossel da seção "valores" ===
  const trackValores = document.querySelector('.carrossel-wrapper');
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
    trackValores.style.transition = "transform 0.5s ease";
    trackValores.style.transform = `translateX(-${offset}px)`;

    cardsValores.forEach((card, i) => {
      card.classList.remove('central');
      card.style.opacity = '0.5';
      card.style.transform = 'scale(0.9)';
      card.style.zIndex = '1';
    });

    const centralIndex = indexValores + Math.floor(visibleCount / 2);
    if (cardsValores[centralIndex]) {
      cardsValores[centralIndex].classList.add('central');
      cardsValores[centralIndex].style.opacity = '1';
      cardsValores[centralIndex].style.transform = 'scale(1.05)';
      cardsValores[centralIndex].style.zIndex = '2';
      cardsValores[centralIndex].style.backgroundColor = '#00adcd';
    }
  }

  btnNextValores?.addEventListener('click', () => {
    indexValores++;
    updateCarouselValores();
  });

  btnPrevValores?.addEventListener('click', () => {
    indexValores--;
    updateCarouselValores();
  });

  window.addEventListener('load', () => {
    updateCarouselValores();
  });

  // === Carrossel da seção "certificados" ===
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next');

      if (index === currentIndex) {
        slide.classList.add('active');
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add('next');
      }
    });
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }

  updateSlides();
  setInterval(showNextSlide, 7000); // a cada 7s
});
