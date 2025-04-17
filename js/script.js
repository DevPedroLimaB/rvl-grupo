document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada e script.js ativo');
  
    // === Tradução ===
    function setLanguage(lang) {
      document.querySelectorAll('[data-pt]').forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
      });
      // Salva o idioma no localStorage
      localStorage.setItem('lang', lang);
    }
  
    window.setLanguage = setLanguage;
  
    // Aplica o idioma salvo
    const savedLang = localStorage.getItem('lang') || 'pt';
    setLanguage(savedLang);
  
    // Adiciona eventos para as bandeiras
    const flagPT = document.querySelector('img[alt="Português"]');
    if (flagPT) {
      flagPT.addEventListener('click', () => {
        setLanguage('pt');
      });
    }
  
    const flagEN = document.querySelector('img[alt="English"]');
    if (flagEN) {
      flagEN.addEventListener('click', () => {
        setLanguage('en');
      });
    }
  });
  
  // === Carrossel Principal ===
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

   // === Novo Carrossel da seção "valores" ===
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
  }, 7000);

  updateCarousel();
  // === Tema escuro ===
  const toggleButton = document.getElementById('toggleTheme');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Salvar preferências de tema no localStorage
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }

  // Carregar tema preferido do localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
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
