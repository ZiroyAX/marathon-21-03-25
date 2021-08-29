import currentTheme from './main.js'
const titleWeatherForecast = document.querySelector('.titleWeatherForecast');
const btnWeek = titleWeatherForecast.children[1];
const btnHour = titleWeatherForecast.children[2];
const card = document.getElementsByClassName('card');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const weekData = document.getElementById('weekData');
const hourData = document.getElementById('hourData');

function createButton({weekOrHourDay, day, night, backgroundImage}) {
  // <button id="card_1" class="card"><p class="cardT">Завтра</p><p class="cardLB">10°C</p><p class="cardRB">4°C</p></button>
  const btn = document.createElement('button');
  const pWeekOrHourDay = document.createElement('p');
  const pDay = document.createElement('p');
  const pNight = document.createElement('p');
  btn.className = 'card';
  btn.style.backgroundImage = backgroundImage;
  pWeekOrHourDay.className = 'cardT';
  pDay.className = 'cardLB';
  pNight.className = 'cardRB';

  pWeekOrHourDay.innerText = weekOrHourDay;
  pDay.innerText = day;
  pNight.innerText = night;

  btn.appendChild(pWeekOrHourDay);
  btn.appendChild(pDay);
  btn.appendChild(pNight);

  return btn
}

class DisplayVisibility {
  constructor(visibility, length) {
    this.visibilityBoolean = new Array(length).fill(true, 0, visibility).fill(false, visibility)
  }
  plus() {
    if (!this.visibilityBoolean[this.visibilityBoolean.length - 1]) {
      this.visibilityBoolean.unshift(this.visibilityBoolean.pop())
    }
  }

  minus() {
    if (!this.visibilityBoolean[0]) {
      this.visibilityBoolean.push(this.visibilityBoolean.shift())
    }
  }

  visibility(counter) {
    let tempCounter = 0;
    this.visibilityBoolean = this.visibilityBoolean.map(() => {
      if (tempCounter < counter) {
        tempCounter++;
        return true
      } else return false
    })
  }
}

const Data = [
  {
    weekOrHourDay: 'Завтра',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_1.png')",
    visibility: true,
  },
  {
    weekOrHourDay: 'Вт, 15 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_2.png')",
  },
  {
    weekOrHourDay: 'Вт, 16 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_3.png')",
  },
  {
    weekOrHourDay: 'Вт, 17 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_1.png')",
  },
  {
    weekOrHourDay: 'Вт, 18 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_2.png')",
  },
  {
    weekOrHourDay: 'Вт, 19 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_2.png')",
  },
  {
    weekOrHourDay: 'Вт, 20 мар',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_2.png')",
  }
]

window.onresize = () => {
  const widthSizeScreen = window.innerWidth;
  
  if (widthSizeScreen >= 1440) {
    weekDayVisibility.visibility(6);
  } else if (widthSizeScreen > 375 && widthSizeScreen < 1440) {
    weekDayVisibility.visibility(3);
  } else weekDayVisibility.visibility(Data.length);

  Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
    if (weekDayVisibility.visibilityBoolean[index]) {
      item.style.display = 'grid';
    } else item.style.display = 'none';
  })
}

let visibilityCounter = 0;
if (window.innerWidth >= 1440) {
  visibilityCounter = 6;
} else if (window.innerWidth > 375 && window.innerWidth < 1440) {
  visibilityCounter = 3;
} else visibilityCounter = Data.length;

const weekDayVisibility = new DisplayVisibility(visibilityCounter, Data.length);

Data.forEach((item, index) => {
  const btn = createButton(item);
  if (weekDayVisibility.visibilityBoolean[index]) {
    btn.style.display = 'grid';
  } else btn.style.display = 'none';
  hourData.appendChild(btn);
})

btnRight.addEventListener('click', () => {
  weekDayVisibility.plus();
  Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
    if (weekDayVisibility.visibilityBoolean[index]) {
      item.style.display = 'grid';
    } else item.style.display = 'none';
  })
})

btnLeft.addEventListener('click', () => {
  weekDayVisibility.minus();
  Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
    if (weekDayVisibility.visibilityBoolean[index]) {
      item.style.display = 'grid';
    } else item.style.display = 'none';
  })
})




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