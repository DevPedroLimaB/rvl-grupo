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
setInterval(showNextSlide, 5000); // a cada 10s