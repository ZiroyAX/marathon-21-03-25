import currentTheme from "./sidebar.js";
const titleWeatherForecast = document.querySelector('.titleWeatherForecast');
const btnWeek = titleWeatherForecast.children[1];
const btnHour = titleWeatherForecast.children[2];

btnWeek.style.paddingBottom = '9px';
btnWeek.style.borderBottom = '3px solid #48484A';
btnHour.style.color = '#ACACAC';

