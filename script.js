//your JS code here. If required.
const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
