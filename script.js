let currentSlideIndex = 0;
const slideOrder = [0, 1, 2, 3, 4, 5, 6, 7]; // Índices dos slides que você deseja mostrar inicialmente
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Função para mostrar o slide atual e atualizar os indicadores
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === slideOrder[index]) ? 'block' : 'none';
  });
  updateIndicators(index);
}

// Função para atualizar os indicadores, marcando o slide ativo
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Função para ir ao próximo slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slideOrder.length;
  showSlide(currentSlideIndex);
}

// Função para ir ao slide anterior
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slideOrder.length) % slideOrder.length;
  showSlide(currentSlideIndex);
}

// Função para mostrar o slide 8 ao clicar no botão "✖"
function buttonClick() {
  showSlide(7); // Supondo que slide-7 seja o índice 6
}

// Adiciona evento aos indicadores para ir ao slide correspondente
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentSlideIndex = i;
    showSlide(currentSlideIndex);
  });
});

// Inicializa o primeiro slide e indicadores ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlideIndex);
});
