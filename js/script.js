document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e script.js ativo');
  
    //Tradução 
    function setLanguage(lang) {
      document.querySelectorAll('[data-pt]').forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
      });
    }
  
    window.setLanguage = setLanguage;
  
    // Carrossel Principal 
    const slides = document.querySelectorAll('#main-carousel .slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 13000);
  

    // Carrossel de Soluções (3 por vez, destaque central)
const carousel = document.querySelector('.solutions-carousel');
const solutionItems = document.querySelectorAll('.solution');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const visibleCount = 3;
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = solutionItems[0].offsetWidth + 20;
    const visibleCount = 3;
    const offset = currentIndex * itemWidth;
  
    carousel.style.transform = `translateX(-${offset}px)`;
  
    solutionItems.forEach((item, i) => {
      item.classList.remove('active', 'visible');
      item.style.backgroundColor = 'var(--cor-azul-escuro)';
      item.style.transform = 'scale(0.95)';
  
      // Mostrar só os 3 visíveis, não mexe aqui foi dificil acertar kakakakaka
      if (i >= currentIndex && i < currentIndex + visibleCount) {
        item.classList.add('visible');
      }
  
      // Item central
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

// Auto-rotation
setInterval(() => {
  if (currentIndex >= solutionItems.length - visibleCount) {
    currentIndex = 0; // Reset to first item
  } else {
    currentIndex++;
  }
  updateCarousel();
}, 7000);

// Initial setup
updateCarousel();
  
    // === 4. Tema escuro ===
    const toggleButton = document.getElementById('toggleTheme');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });
    }
  
    const darkModeCSS = `
      body.dark-mode {
        background-color: var(--cor-preto);
        color: var(--cor-branco);
      }
      body.dark-mode .header {
        background-color: #111;
      }
      body.dark-mode .card {
        background-color: #1a1a1a;
        color: var(--cor-branco);
        border: 1px solid #333;
      }
      body.dark-mode .button {
        background-color: var(--cor-azul-escuro);
      }
      body.dark-mode .button:hover {
        background-color: var(--cor-ciano);
      }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(darkModeCSS));
    document.head.appendChild(style);
  });
  