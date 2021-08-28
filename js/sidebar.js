'use strict'
import currentTheme from "./main.js";

const currentDay = document.getElementById('currentDay');
const btnSearchCity = document.getElementById('btnSearchCity');
const searchPanel = document.getElementById('searchPanel');
const searchPanelInput = searchPanel.querySelectorAll('input');
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

btnTheme.addEventListener('click', () => {
  if (currentTheme.currentTheme === 'white') {
    divInbtnTheme.style.gridColumnStart = 2;
    currentTheme.currentTheme = 'black';

    btnTheme.style.backgroundColor = currentTheme.blackStyle.btn;
    divInbtnTheme.style.backgroundColor = currentTheme.blackStyle.div;
    currentDay.style.backgroundColor = currentTheme.blackStyle.btn;
    searchPanel.style.backgroundColor = currentTheme.blackStyle.btn;
    btnSearchCity.style.backgroundColor = currentTheme.blackStyle.btn;
    searchPanelInput[0].style.backgroundColor = currentTheme.blackStyle.btn;
    searchPanelInput[1].style.backgroundColor = currentTheme.blackStyle.btn;
    pathIndivBtnTheme.setAttribute('fill', currentTheme.blackStyle.svg);
    feelingWeather[0].style.color = currentTheme.blackStyle.color;

    document.body.style.backgroundColor = '#100E1C';
    document.body.style.color = currentTheme.blackStyle.color;
    Array.from(document.body.querySelectorAll('p')).forEach((i) => {
      i.style.color = currentTheme.blackStyle.color;
    })
    Array.from(document.body.querySelectorAll('button')).forEach((i) => {
      if (i.innerText === 'почасовой') {
      } else i.style.color = currentTheme.blackStyle.color;
    })
    Array.from(document.body.querySelectorAll('input')).forEach((i) => {
      i.style.color = currentTheme.blackStyle.color;
    })
  } else if (currentTheme.currentTheme === 'black') {
    divInbtnTheme.style.gridColumnStart = 1;
    currentTheme.currentTheme = 'white';

    btnTheme.style.backgroundColor = currentTheme.whiteStyle.btn;
    divInbtnTheme.style.backgroundColor = currentTheme.whiteStyle.div;
    currentDay.style.backgroundColor = currentTheme.whiteStyle.btn;
    searchPanel.style.backgroundColor = currentTheme.whiteStyle.btn;
    btnSearchCity.style.backgroundColor = currentTheme.whiteStyle.btn;
    searchPanelInput[0].style.backgroundColor = currentTheme.whiteStyle.btn;
    searchPanelInput[1].style.backgroundColor = currentTheme.whiteStyle.btn;
    pathIndivBtnTheme.setAttribute('fill', currentTheme.whiteStyle.svg);

    feelingWeather[0].style.color = currentTheme.whiteStyle.color;
    document.body.style.backgroundColor = '#E5E5E5';
    document.body.style.color = currentTheme.whiteStyle.color;
    Array.from(document.body.querySelectorAll('p')).forEach((i) => {
      i.style.color = currentTheme.whiteStyle.color;
    })
    Array.from(document.body.querySelectorAll('button')).forEach((i) => {
      if (i.innerText === 'почасовой') {
      } else i.style.color = currentTheme.whiteStyle.color;
    })
    Array.from(document.body.querySelectorAll('input')).forEach((i) => {
      i.style.color = currentTheme.whiteStyle.color;
    })
  }
})