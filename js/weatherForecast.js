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

const DataDay = [
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
];

const DataHour = [
  {
    weekOrHourDay: '12:00',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_1.png')",
    visibility: true,
  },
  {
    weekOrHourDay: '14:00',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_3.png')",
    visibility: true,
  },
  {
    weekOrHourDay: '16:00',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_3.png')",
    visibility: true,
  },
  {
    weekOrHourDay: '18:00',
    day: '22°C',
    night: '14°C',
    backgroundImage: "url('../image/imgWeather_3.png')",
    visibility: true,
  },
]

let widthSizeScreen = window.innerWidth;
window.onresize = () => {
  widthSizeScreen = window.innerWidth;
  
  if (widthSizeScreen >= 1440) {
    weekDayVisibility.visibility(6);
  } else if (widthSizeScreen > 375 && widthSizeScreen < 1440) {
    weekDayVisibility.visibility(3);
  } else weekDayVisibility.visibility(DataDay.length);

  if (widthSizeScreen >= 1440) {
    weekHourVisibility.visibility(6);
  } else if (widthSizeScreen > 375 && widthSizeScreen < 1440) {
    weekHourVisibility.visibility(3);
  } else weekHourVisibility.visibility(DataHour.length);

  Array.from(weekData.querySelectorAll('button')).forEach((item, index) => {
    if (weekDayVisibility.visibilityBoolean[index]) {
      item.style.display = 'grid';
    } else item.style.display = 'none';
  })
  Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
    if (weekHourVisibility.visibilityBoolean[index]) {
      item.style.display = 'grid';
    } else item.style.display = 'none';
  })
}

let visibilityCounterDay = 0;
if (window.innerWidth >= 1440) {
  visibilityCounterDay = 6;
} else if (window.innerWidth > 375 && window.innerWidth < 1440) {
  visibilityCounterDay = 3;
} else visibilityCounterDay = DataDay.length;

let visibilityCounterHour = 0;
if (window.innerWidth >= 1440) {
  visibilityCounterHour = 6;
} else if (window.innerWidth > 375 && window.innerWidth < 1440) {
  visibilityCounterHour = 3;
} else visibilityCounterHour = DataHour.length;

const weekDayVisibility = new DisplayVisibility(visibilityCounterDay, DataDay.length);
const weekHourVisibility = new DisplayVisibility(visibilityCounterHour, DataHour.length);

DataDay.forEach((item, index) => {
  const btn = createButton(item);
  if (weekDayVisibility.visibilityBoolean[index]) {
    btn.style.display = 'grid';
  } else btn.style.display = 'none';
  weekData.appendChild(btn);
});

DataHour.forEach((item, index) => {
  const btn = createButton(item);
  if (weekHourVisibility.visibilityBoolean[index]) {
    btn.style.display = 'grid';
  } else btn.style.display = 'none';
  hourData.appendChild(btn);
});


btnRight.addEventListener('click', () => {
  if (activeButton === 'day') {
    weekDayVisibility.plus();
    Array.from(weekData.querySelectorAll('button')).forEach((item, index) => {
      if (weekDayVisibility.visibilityBoolean[index]) {
        item.style.display = 'grid';
      } else item.style.display = 'none';
    });
    if (weekDayVisibility.visibilityBoolean[weekDayVisibility.visibilityBoolean.length - 1]) {
      btnRight.querySelector('circle').setAttribute('opacity', '0.3');
      btnRight.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnRight.querySelector('circle').setAttribute('opacity', '1');
      btnRight.querySelector('path').setAttribute('opacity', '1');
    }
    if (weekDayVisibility.visibilityBoolean[0]) {
      btnLeft.querySelector('circle').setAttribute('opacity', '0.3');
      btnLeft.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnLeft.querySelector('circle').setAttribute('opacity', '1');
      btnLeft.querySelector('path').setAttribute('opacity', '1');
    }
  } else if (activeButton === 'hour') {
    weekHourVisibility.plus();
    Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
      if (weekHourVisibility.visibilityBoolean[index]) {
        item.style.display = 'grid';
      } else item.style.display = 'none';
    });
    if (weekHourVisibility.visibilityBoolean[weekHourVisibility.visibilityBoolean.length - 1]) {
      btnRight.querySelector('circle').setAttribute('opacity', '0.3');
      btnRight.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnRight.querySelector('circle').setAttribute('opacity', '1');
      btnRight.querySelector('path').setAttribute('opacity', '1');
    }
    if (weekHourVisibility.visibilityBoolean[0]) {
      btnLeft.querySelector('circle').setAttribute('opacity', '0.3');
      btnLeft.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnLeft.querySelector('circle').setAttribute('opacity', '1');
      btnLeft.querySelector('path').setAttribute('opacity', '1');
    }
  }
})

btnLeft.addEventListener('click', () => {
  if (activeButton === 'day') {
    weekDayVisibility.minus();
    Array.from(weekData.querySelectorAll('button')).forEach((item, index) => {
      if (weekDayVisibility.visibilityBoolean[index]) {
        item.style.display = 'grid';
      } else item.style.display = 'none';
    });
    if (weekDayVisibility.visibilityBoolean[weekDayVisibility.visibilityBoolean.length - 1]) {
      btnRight.querySelector('circle').setAttribute('opacity', '0.3');
      btnRight.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnRight.querySelector('circle').setAttribute('opacity', '1');
      btnRight.querySelector('path').setAttribute('opacity', '1');
    }
    if (weekDayVisibility.visibilityBoolean[0]) {
      btnLeft.querySelector('circle').setAttribute('opacity', '0.3');
      btnLeft.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnLeft.querySelector('circle').setAttribute('opacity', '1');
      btnLeft.querySelector('path').setAttribute('opacity', '1');
    }
  } else if (activeButton === 'hour') {
    weekHourVisibility.minus();
    Array.from(hourData.querySelectorAll('button')).forEach((item, index) => {
      if (weekHourVisibility.visibilityBoolean[index]) {
        item.style.display = 'grid';
      } else item.style.display = 'none';
    });
    if (weekHourVisibility.visibilityBoolean[weekHourVisibility.visibilityBoolean.length - 1]) {
      btnRight.querySelector('circle').setAttribute('opacity', '0.3');
      btnRight.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnRight.querySelector('circle').setAttribute('opacity', '1');
      btnRight.querySelector('path').setAttribute('opacity', '1');
    }
    if (weekHourVisibility.visibilityBoolean[0]) {
      btnLeft.querySelector('circle').setAttribute('opacity', '0.3');
      btnLeft.querySelector('path').setAttribute('opacity', '0.3');
    } else {
      btnLeft.querySelector('circle').setAttribute('opacity', '1');
      btnLeft.querySelector('path').setAttribute('opacity', '1');
    }
  }
})

let activeButton = 'day';
hourData.style.display = 'none';

btnWeek.addEventListener('click', () => {
  activeButton = 'day';
  if (widthSizeScreen <= 375) {
    weekData.style.display = 'grid';
    hourData.style.display = 'none';
  } else {
    weekData.style.display = 'flex';
    hourData.style.display = 'none';
  }
  btnWeek.style.paddingBottom = '9px';
  btnWeek.style.borderBottom = '3px solid #48484A';  
  btnHour.style.paddingBottom = 'initial';
  btnHour.style.borderBottom = 'initial';
  if (currentTheme.currentTheme === 'white') {
    btnHour.style.color = currentTheme.whiteStyle.colorSecond;
  } else btnHour.style.color = currentTheme.blackStyle.colorSecond;
  if (currentTheme.currentTheme === 'white') {
    btnWeek.style.color = currentTheme.whiteStyle.color;
  } else btnWeek.style.color = currentTheme.blackStyle.color;
});
btnHour.addEventListener('click', () => {
  activeButton = 'hour';
  if (widthSizeScreen <= 375) {
    weekData.style.display = 'none';
    hourData.style.display = 'grid';
  } else {
    weekData.style.display = 'none';
    hourData.style.display = 'flex';
  }
  btnWeek.style.paddingBottom = 'initial';
  btnWeek.style.borderBottom = 'initial';
  btnHour.style.paddingBottom = '9px';
  btnHour.style.borderBottom = '3px solid #48484A';
  if (currentTheme.currentTheme === 'white') {
    btnWeek.style.color = currentTheme.whiteStyle.colorSecond;
  } else btnWeek.style.color = currentTheme.blackStyle.colorSecond;
  if (currentTheme.currentTheme === 'white') {
    btnHour.style.color = currentTheme.whiteStyle.color;
  } else btnHour.style.color = currentTheme.blackStyle.color;
});

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