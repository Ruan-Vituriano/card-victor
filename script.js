// Selecione a carta
const card = document.querySelector('.card');

// Adicione um evento de clique
card.addEventListener('click', () => {
  // Alterna a rotação da carta
  card.style.transform = card.style.transform === 'rotateY(180deg)' 
    ? 'rotateY(0deg)' 
    : 'rotateY(180deg)';
});
