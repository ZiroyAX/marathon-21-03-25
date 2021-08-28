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