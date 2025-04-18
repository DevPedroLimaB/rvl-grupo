document.addEventListener('DOMContentLoaded', () => {
  console.log('Página com collapsible carregada');

  // === Tradução ===
  function setLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
      el.innerText = el.getAttribute(`data-${lang}`);
    });
  }

  window.setLanguage = setLanguage;

  // Aplica o idioma salvo ao carregar a página
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);


  // === Novo Carrossel da seção "valores" (formato solutions-carousel) ===
  const carousel = document.querySelector('.solutions-carousel');
  const solutionItems = document.querySelectorAll('.solution');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let currentIndex = 1; // Começa no item central
  
  function updateCarousel() {
    const activeItem = solutionItems[currentIndex];
    const itemWidth = activeItem.offsetWidth + 20; // Margens incluídas
    const containerWidth = document.querySelector('.carousel_container').offsetWidth;
    
    // Cálculo preciso do offset
    const offset = (containerWidth/2) - (itemWidth/2) - (currentIndex * itemWidth);
    
    carousel.style.transform = `translateX(${offset}px)`;
  }
  
  function updateClasses() {
    solutionItems.forEach((item, index) => {
      item.classList.remove('active', 'prev', 'next');
      
      if(index === currentIndex) {
        item.classList.add('active');
      } else if(index === (currentIndex - 1 + solutionItems.length) % solutionItems.length) {
        item.classList.add('prev');
      } else if(index === (currentIndex + 1) % solutionItems.length) {
        item.classList.add('next');
      }
    });
  }
  
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + solutionItems.length) % solutionItems.length;
    updateCarousel();
    updateClasses();
  });
  
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % solutionItems.length;
    updateCarousel();
    updateClasses();
  });
  

  // Inicialização
  updateCarousel();
  updateClasses();
  setInterval(updateCarousel, 1000);
  setInterval(updateClasses, 1000);
 
  
  // Redimensionamento da janela
  window.addEventListener('resize', () => {
    updateCarousel();
    updateClasses();
  });





// Configurações do carrossel
const leftCard = document.getElementById('card-left');
const centerCard = document.getElementById('card-center');
const rightCard = document.getElementById('card-right');

let contents = [
  'Inspeções qualificadas N1 e N2',
  'Normas ABNT',
  'Qualidade de serviço'
];

const cards = [leftCard, centerCard, rightCard];

  setInterval(() => {
    // Aplica fade-out
    cards.forEach(card => card.classList.add('fade-out'));

    setTimeout(() => {
      // Rotaciona os textos
      contents.unshift(contents.pop());

      // Atualiza os conteúdos
      leftCard.textContent = contents[0];
      centerCard.textContent = contents[1];
      rightCard.textContent = contents[2];

      // Aplica fade-in
      cards.forEach(card => {
        card.classList.remove('fade-out');
        card.classList.add('fade-in');
      });

      // Remove classe fade-in após animação pra resetar
      setTimeout(() => {
        cards.forEach(card => card.classList.remove('fade-in'));
      }, 400);

    }, 400); // Espera o fade-out antes de trocar texto
  }, 3000);
});