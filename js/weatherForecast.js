import currentTheme from './main.js'
const titleWeatherForecast = document.querySelector('.titleWeatherForecast');
const btnWeek = titleWeatherForecast.children[1];
const btnHour = titleWeatherForecast.children[2];
const card = document.getElementsByClassName('card');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


btnWeek.style.paddingBottom = '9px';
btnWeek.style.borderBottom = '3px solid #48484A';

if (currentTheme.currentTheme === 'white') {
  btnHour.style.color = currentTheme.whiteStyle.colorSecond;
} else btnHour.style.color = currentTheme.blackStyle.colorSecond;

export function testWeather() {
  if (currentTheme.currentTheme === 'white') {
    btnHour.style.color = currentTheme.whiteStyle.colorSecond;
    Array.from(card).forEach((item) => {
      item.style.backgroundColor = 'white';
    })
    btnLeft.querySelector('circle').setAttribute('fill', 'white');
    btnRight.querySelector('circle').setAttribute('fill', 'white');
  } else {
    btnHour.style.color = currentTheme.blackStyle.colorSecond;
    Array.from(card).forEach((item) => {
      item.style.backgroundColor = '#212331';
    })
    btnLeft.querySelector('circle').setAttribute('fill', '#212331');
    btnRight.querySelector('circle').setAttribute('fill', '#212331');
  }
}