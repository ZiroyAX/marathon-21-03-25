import currentTheme from "./main.js";

const descriptionDay = document.getElementsByClassName('descriptionDay');

export function detail() {
  if (currentTheme.currentTheme === 'white') {
    Array.from(descriptionDay).forEach((item) => {
      item.style.backgroundColor = 'white';
    })
  } else {
    Array.from(descriptionDay).forEach((item) => {
      item.style.backgroundColor = '#212331';
    })
  }
}

// const divData = {
//   'Скорость ветра': 'м/с',
//   'Влажность': ' %',
//   'Видимость': 'км',
//   'Давление': 'мм рт. ст.',
// }

const divData = {
  'Скорость ветра': {text: 'м/с', path: (value) => value.current.wind_speed},
  'Влажность': {text: ' %', path: (value) => value.current.humidity},
  'Видимость': {text: 'км', path: (value) => value.current.visibility},
  'Давление': {text: 'мм рт. ст.', path: (value) => value.current.pressure},
}

const WIND_DIRECTION = {
  'С': {from: 348.75, to: 33.75, degree: 0},
  'СВ': {from: 33.75, to: 78.75, degree: 45},
  'В': {from: 78.75, to: 123.75, degree: 90},
  'ЮВ': {from: 123.75, to: 168.75, degree: 135},
  'Ю': {from: 168.75, to: 213.75, degree: 180},
  'ЮЗ': {from: 213.75, to: 258.75, degree: 225},
  'З': {from: 258.75, to: 303.75, degree: 270},
  'СЗ': {from: 303.75, to: 348.75, degree: 315},
}

function currentWindDirection(obj, deg) {
  for (let key in obj) {
    if (deg >= obj[key].from && deg <= obj[key].to) {
      return [key, obj[key].degree];
    }
    if (deg > 348.75 || deg >= 0 && deg <= obj[key].to) {
      return [key, obj[key].degree];
    }
  }
}

export function updateWeatherForecast(value) {
  Array.from(descriptionDay).forEach((item) => {
    const span = document.createElement('span');
    span.className = 'descriptionValue';
    span.innerText = divData[item.children[0].innerText].text;

    if (item.children[0].innerText === 'Давление') {
      console.log('Давление');
      span.style.fontSize = '18px';
      item.children[1].innerText = Math.round((divData[item.children[0].innerText].path(value)) / 1.3332239);
    } else item.children[1].innerText = Math.round(divData[item.children[0].innerText].path(value));

    if (item.children[0].innerText === 'Скорость ветра') {
      const [key, degree] = currentWindDirection(WIND_DIRECTION, value.current.wind_deg);
      const divDegSvg = item.querySelector('svg');
      divDegSvg.style.transform = `rotate(${degree + 45}deg)`;
      const spanDegree = item.querySelector('span');
      spanDegree.innerText = key;
    }

    item.children[1].appendChild(span);
  });
}