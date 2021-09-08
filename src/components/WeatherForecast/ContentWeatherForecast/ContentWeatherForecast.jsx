import React from 'react';
import cl from './ContentWeatherForecast.module.css';
import useDisplayVisibility from '../../hooks/useDisplayVisibility';
import Daily from './Daily/Daily';

export default function ContentWeatherForecast({data, isDownloading, currentTheme}) {
  const [arrVisibility, plus, minus, newVisibility] = useDisplayVisibility(3, 7);
  return (
    <div className={cl.ContentWeatherForecast} style={{backgroundColor: 'initial'}}>
      <button onClick={minus}>click-</button>
      <Daily
        cl={cl}
        arrVisibility={arrVisibility}
        data={data} 
        isDownloading={isDownloading} 
        currentTheme={currentTheme}
      />

      <button onClick={plus}>click+</button>
    </div>
  )
}
