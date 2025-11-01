const openModalBtn = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
