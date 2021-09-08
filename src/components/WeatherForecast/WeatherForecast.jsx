import React, {useState} from 'react';
import cl from './WeatherForecast.module.css';
import TitleWeatherForecast from './TitleWeatherForecast/TitleWeatherForecast';
import ContentWeatherForecast from './ContentWeatherForecast/ContentWeatherForecast';

export default function WeatherForecast({data, isDownloading, currentTheme}) {
  const [currentBtn, setCurrentBtn] = useState('week');
  return (
    <div className={cl.WeatherForecast}>
      <TitleWeatherForecast currentBtn={currentBtn} setCurrentBtn={setCurrentBtn} />
      <ContentWeatherForecast data={data} isDownloading={isDownloading} currentTheme={currentTheme}/>
    </div>
  )
}
