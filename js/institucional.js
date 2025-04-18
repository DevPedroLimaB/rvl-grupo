document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada e script.js ativo (institucional)');

  // === Tradução ===
  function setLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
      el.innerText = el.getAttribute(`data-${lang}`);
    });
  }

  window.setLanguage = setLanguage;

  // === Novo Carrossel da seção "valores" (formato solutions-carousel) ===
  const carousel = document.querySelector('.solutions-carousel');
  const solutionItems = document.querySelectorAll('.solution');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const visibleCount = 3;
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = solutionItems[0].offsetWidth + 20;
    const offset = currentIndex * itemWidth;

    carousel.style.transform = `translateX(-${offset}px)`;

    solutionItems.forEach((item, i) => {
      item.classList.remove('active', 'visible');
      item.style.backgroundColor = 'var(--cor-azul-escuro)';
      item.style.transform = 'scale(0.95)';

      if (i >= currentIndex && i < currentIndex + visibleCount) {
        item.classList.add('visible');
      }

      if (i === currentIndex + 1) {
        item.classList.add('active');
        item.style.backgroundColor = 'var(--cor-ciano)';
        item.style.transform = 'scale(1.15)';
      }
    });
  }

  leftArrow?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  rightArrow?.addEventListener('click', () => {
    if (currentIndex < solutionItems.length - visibleCount) {
      currentIndex++;
      updateCarousel();
    }
  });

  setInterval(() => {
    if (currentIndex >= solutionItems.length - visibleCount) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }, 5000);

  updateCarousel();
  
  // === Aplicar idioma salvo ===
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);

  // === Carrossel da seção "certificados" ===
  const slides = document.querySelectorAll('.slide');
  let currentSlideIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next');

      if (index === currentSlideIndex) {
        slide.classList.add('active');
      } else if (index === (currentSlideIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (index === (currentSlideIndex + 1) % slides.length) {
        slide.classList.add('next');
      }
    });
  }

  function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
  }

  updateSlides();
  setInterval(showNextSlide, 7000); // a cada 7s
});
