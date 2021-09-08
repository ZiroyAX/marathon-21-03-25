import {useState} from 'react';

export default function useDisplayVisibility(visibility, length) {
  const [arrVisibility, setArrVisibility] = useState(new Array(length).fill(true, 0, visibility).fill(false, visibility));
  
  const plus = () => {
    const data = [...arrVisibility];
    if (!data[data.length - 1]) {
      data.unshift(data.pop())
      setArrVisibility(data);
    }
  }

  const minus = () => {
    const data = [...arrVisibility];
    if (!data[0]) {
      data.push(data.shift());
      setArrVisibility(data);
    }
  }

  const newVisibility = (counter) => {
    let tempCounter = 0;
    let data = [...arrVisibility];
    data = data.map(() => {
      if (tempCounter < counter) {
        tempCounter++;
        return true
      } else return false
    });
    setArrVisibility(data);
  }


  return [arrVisibility, plus, minus, newVisibility]
}

