const btnSearchCity = document.getElementById('btnSearchCity');
const searchPanel = document.getElementById('searchPanel');
const btnCloseSearchPanel = document.getElementById('btnCloseSearchPanel');

btnSearchCity.addEventListener('click', () => {
  searchPanel.style.left = 0;
})

btnCloseSearchPanel.addEventListener('click', () => {
  searchPanel.style.left = '-100%';
})