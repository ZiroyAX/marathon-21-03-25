'use strict'
const btnSearchCity = document.getElementById('btnSearchCity');
const searchPanel = document.getElementById('searchPanel');
const btnCloseSearchPanel = document.getElementById('btnCloseSearchPanel');
const btnTheme = document.getElementById('btnTheme');
const divInbtnTheme = btnTheme.querySelector('div');
const pathIndivBtnTheme = divInbtnTheme.querySelector('path');
const feelingWeather = document.getElementsByClassName('feelingWeather');

btnSearchCity.addEventListener('click', () => {
  searchPanel.style.left = 0;
})

btnCloseSearchPanel.addEventListener('click', () => {
  searchPanel.style.left = '-100%';
})

const currentTheme = {currentTheme: true};
const whiteStyle = {
  btn: '#FFFFFF',
  div: '#48484A',
  svg: '#E6E6E6',
  color: 'var(--second-color-text)',
}
const blackStyle = {
  btn: '#212331',
  div: '#EC6E4D',
  svg: '#212331',
  color: 'var(--second-color-text-black)',
}

btnTheme.addEventListener('click', () => {
  if (currentTheme.currentTheme) {
    divInbtnTheme.style.gridColumnStart = 2;
    currentTheme.currentTheme = false;

    btnTheme.style.backgroundColor = blackStyle.btn;
    divInbtnTheme.style.backgroundColor = blackStyle.div;
    pathIndivBtnTheme.setAttribute('fill', blackStyle.svg);

    feelingWeather[0].style.color = blackStyle.color;

  } else {
    divInbtnTheme.style.gridColumnStart = 1;
    currentTheme.currentTheme = true;

    btnTheme.style.backgroundColor = whiteStyle.btn;
    divInbtnTheme.style.backgroundColor = whiteStyle.div;
    pathIndivBtnTheme.setAttribute('fill', whiteStyle.svg);

    feelingWeather[0].style.color = whiteStyle.color;

  }
})

export default currentTheme;