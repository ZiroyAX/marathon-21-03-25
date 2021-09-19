import React, {useState, useEffect} from 'react';
import {stylesTheme} from '../../utylites/chooseGlobalStylesTheme';
import cl from './ContentWeatherForecast.module.css';
import useDisplayVisibility from '../../hooks/useDisplayVisibility';
import useUpdateScreenSize from '../../hooks/useUpdateScreenSize';
import Daily from './Daily/Daily';
import Hourly from './Hourly/Hourly';
import rangeVisibility from '../../utylites/rangeVisibility';
import BtnLeft from '../../svg/BtnLeft';
import BtnRight from '../../svg/BtnRight';

export default function ContentWeatherForecast({data, isDownloading, currentTheme, currentBtn}) {
  const [arrVisibility, plus, minus, newVisibility] = useDisplayVisibility(3, 7);
  const [arrVisibilityTime, plusTime, minusTime, newVisibilityTime] = useDisplayVisibility(3, 48);
  const [currentSize] = useUpdateScreenSize();
  const [btnLeftRightVisibility, setBtnLeftRightVisibility] = useState(true);
  useEffect(() => {
    for (const key in rangeVisibility) {
      const [min, max] = rangeVisibility[key];
        if (currentSize.width >= min && currentSize.width <= max) {
          if (isNaN(+key)) {
            newVisibility(7);
            newVisibilityTime(48);
            setBtnLeftRightVisibility(false);
          } else {
            newVisibility(+key);
            newVisibilityTime(+key);
            setBtnLeftRightVisibility(true);
          }
      }
    }
  }, [currentSize])
  return (
    <div className={cl.ContentWeatherForecast} style={{backgroundColor: 'initial'}}>
      {
        currentBtn === 'week'
          ? <div style={{backgroundColor: 'initial'}}>
              {btnLeftRightVisibility ? <button onClick={minus}><BtnLeft opacity={arrVisibility[0] ? '0.3' : '1'} fill={stylesTheme[currentTheme[0]].backgroundColor}/></button> : null}
              <Daily
                cl={cl}
                arrVisibility={arrVisibility}
                data={data.daily} 
                isDownloading={isDownloading} 
                currentTheme={currentTheme}
              />
              {btnLeftRightVisibility ? <button onClick={plus}><BtnRight opacity={arrVisibility[arrVisibility.length - 1] ? '0.3' : '1'} fill={stylesTheme[currentTheme[0]].backgroundColor}/></button> : null}
            </div>
          : <div style={{backgroundColor: 'initial'}}>
              {btnLeftRightVisibility ? <button onClick={minusTime}><BtnLeft opacity={arrVisibilityTime[0] ? '0.3' : '1'} fill={stylesTheme[currentTheme[0]].backgroundColor}/></button> : null}
              <Hourly
                cl={cl}
                arrVisibility={arrVisibilityTime}
                data={data.hourly} 
                isDownloading={isDownloading} 
                currentTheme={currentTheme}
              />
              {btnLeftRightVisibility ? <button onClick={plusTime}><BtnRight opacity={arrVisibilityTime[arrVisibilityTime.length - 1] ? '0.3' : '1'} fill={stylesTheme[currentTheme[0]].backgroundColor}/></button> : null}
            </div>
      }
    </div>
  )
}
