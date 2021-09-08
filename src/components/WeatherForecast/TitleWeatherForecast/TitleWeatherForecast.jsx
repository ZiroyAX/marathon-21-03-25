import React from 'react';
import cl from './TitleWeatherForecast.module.css';

export default function TitleWeatherForecast({currentBtn, setCurrentBtn}) {
  return (
    <div className={cl.TitleWeatherForecast} style={{backgroundColor: 'initial'}}>
      <p>Прогноз</p>
      <button 
        style={currentBtn === 'week' ? null : {color: '#ACACAC'}}
        className={currentBtn === 'week' ? cl.active : null} 
        onClick={() => setCurrentBtn('week')}
      >
        На неделю
      </button>
      <button 
        style={currentBtn === 'hour' ? null : {color: '#ACACAC'}}
        className={currentBtn === 'hour' ? cl.active : null} 
        onClick={() => setCurrentBtn('hour')}
      >
        почасовой
      </button>
    </div>
  )
}
