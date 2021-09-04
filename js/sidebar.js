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
const inputSearch = document.querySelector('.inputSearch');
const inputButton = document.querySelector('.inputButton');

btnSearchCity.addEventListener('click', () => {
  searchPanel.style.left = 0;
})

btnCloseSearchPanel.addEventListener('click', () => {
  searchPanel.style.left = '-100%';
})

inputSearch.addEventListener('input', (e) => {
  currentTheme.searchData = e.target.value;
})

inputButton.addEventListener('click', () => {
  const query = currentTheme.searchData;
  fetch(`https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    currentTheme.city = result[0].address.city || result[0].address.town;
    const lat = result[0].lat;
    const lon = result[0].lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${currentTheme.apiKey}&units=metric&lang=ru`)
    .then(response => response.json())
    .then(result => {
      currentTheme.openWeatherMap = result;
      searchPanel.style.left = '-100%';
      console.log('weather', result);
    });
  });
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
});

export function updateWeatherForecast(value) {
  const currentImgWeather = currentDay.querySelector('img');
  currentImgWeather.src = `http://openweathermap.org/img/wn/${value.current.weather[0].icon}@4x.png`;

  const degree = currentDay.getElementsByClassName('degree')[0];
  const span = document.createElement('span');
  span.className = 'celsius';
  span.innerText = ' °C';
  degree.innerText = Math.round(value.current.temp);
  degree.appendChild(span);

  const weather = currentDay.querySelector('h3');
  weather.innerText = value.current.weather[0].description;

  feelingWeather[0].innerText = `Ощущается как ${Math.round(value.current.feels_like)} °C`;

  const OPTION_DATE = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }
  const currentDate = currentDay.getElementsByClassName('date')[0];
  currentDate.innerText = new Date(value.current.dt * 1000).toLocaleString('ru', OPTION_DATE).slice(0, -1);

  const nameCity = currentDay.getElementsByClassName('nameCity')[0];
  nameCity.innerText = currentTheme.city;
}
