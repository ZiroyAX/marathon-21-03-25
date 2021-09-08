import React, {useState} from 'react';
import cl from './Current.module.css';
import BtnThemeSVG from '../../svg/BtnThemeSVG';
import {stylesTheme} from '../../utylites/chooseGlobalStylesTheme';
import {OPTION_DATE} from '../../utylites/Date';
import Downloading from '../../UI/isDownload/Downloading';

export default function CurrentDay({currentTheme, setCurrentTheme, city, data, isVisibility, setIsVisibility}) {
  const classes = [cl.CurrentDay];
  const [isDownload, setIsDownload] = useState(false);
  setTimeout(() => {
    setIsDownload(true);
  }, 5000);

  return (
      <div className={classes.join(' ')} style={{backgroundImage: 'url(/image/backgroundCurrentDay.png)'}}>
        <button className={cl.searchCity} onClick={() => setIsVisibility(!isVisibility)}>Поиск города</button>
        <button className={cl.btnTheme} onClick={() => {
          setCurrentTheme([...currentTheme].reverse());
        }}>
          <div style={
            { 
              gridColumnStart: currentTheme.indexOf('white') + 1,
              backgroundColor: stylesTheme[currentTheme[0]].divTheme,
            }
          }>
            <BtnThemeSVG currentTheme={currentTheme}/>       
          </div>                                                                                           
        </button>
        <Downloading isDownload={isDownload}>
          {() => <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`} alt="Weather" className={cl.currentImgWeather}/>}
        </Downloading>                                          
        <div className={cl.temperature}>
          <h1 className={cl.degree}>{data ? Math.round(data.current.temp) : null}<span className={cl.celsius}> °C</span></h1>
        </div>
        <h3 className={cl.currentWeather}>{data ? data.current.weather[0].description : null}</h3>
        <p className={cl.feelingWeather}>Ощущается как {data ? Math.round(data.current.feels_like) : null} °C</p>
        <p className={cl.week}>Сегодня</p>
        <p className={cl.date}>{data ? new Date(data.current.dt * 1000).toLocaleString('ru', OPTION_DATE).slice(0, -1) : null}</p>
        <div className={cl.address}>
          <img src="./image/vector.png" alt="vector" className={cl.vector}/>
          <p className={cl.nameCity}>{city ?? null}</p>
        </div>
      </div>
  )
}
