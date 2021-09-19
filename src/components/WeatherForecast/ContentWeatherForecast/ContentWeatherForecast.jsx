import React, {useEffect} from 'react';
import cl from './ContentWeatherForecast.module.css';
import useDisplayVisibility from '../../hooks/useDisplayVisibility';
import useUpdateScreenSize from '../../hooks/useUpdateScreenSize';
import Daily from './Daily/Daily';
import Hourly from './Hourly/Hourly';
import rangeVisibility from '../../utylites/rangeVisibility';

export default function ContentWeatherForecast({data, isDownloading, currentTheme, currentBtn}) {
  const [arrVisibility, plus, minus, newVisibility] = useDisplayVisibility(3, 7);
  const [arrVisibilityTime, plusTime, minusTime, newVisibilityTime] = useDisplayVisibility(3, 48);
  const [currentSize] = useUpdateScreenSize();
  useEffect(() => {
    for (const key in rangeVisibility) {
      const [min, max] = rangeVisibility[key];
        if (currentSize.width >= min && currentSize.width <= max) {
          if (isNaN(+key)) {
            newVisibility(7);
            newVisibilityTime(48);
          } else {
            newVisibility(+key);
            newVisibilityTime(+key);
          }
      }
    }
  }, [currentSize])
  return (
    <div className={cl.ContentWeatherForecast} style={{backgroundColor: 'initial'}}>
      {
        currentBtn === 'week'
          ? <div style={{backgroundColor: 'initial'}}>
              <button onClick={minus}>click-</button>
              <Daily
                cl={cl}
                arrVisibility={arrVisibility}
                data={data.daily} 
                isDownloading={isDownloading} 
                currentTheme={currentTheme}
              />
              <button onClick={plus}>click+</button>
            </div>
          : <div style={{backgroundColor: 'initial'}}>
              <button onClick={minusTime}>click-</button>
              <Hourly
                cl={cl}
                arrVisibility={arrVisibilityTime}
                data={data.hourly} 
                isDownloading={isDownloading} 
                currentTheme={currentTheme}
              />
              <button onClick={plusTime}>click+</button>
            </div>
      }
    </div>
  )
}
