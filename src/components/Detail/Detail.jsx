import React, {useState, useEffect} from 'react';
import cl from './Detail.module.css';
import DescriptionDay from './DescriptionDay/DescriptionDay';
import Downloading from '../UI/isDownload/Downloading';
import WindDirectionSVG from '../svg/WindDirectionSVG';
import {WIND_DIRECTION, currentWindDirection} from '../utylites/windDirection';

export default function Detail({data, isDownloading, currentTheme}) {
  const [currentDegre, setCurrentDegre] = useState([]);
  useEffect(() => {
    if (isDownloading) {
      setCurrentDegre(currentWindDirection(WIND_DIRECTION, data.current.wind_deg))
    }
  }, [isDownloading])
  return (
    <Downloading isDownload={isDownloading}>
      {
        () => {
          return (
            <div className={cl.Detail} style={{backgroundColor: 'initial'}}>
              <h1>Подробно на сегодня</h1>
              <DescriptionDay 
                description={'Скорость ветра'}
                descriptionNumber={Math.round(data.current.wind_speed)}
                descriptionValue={'м/с'}
                currentTheme={currentTheme}
              >
                <div className={cl.windDirection}>
                    <WindDirectionSVG style={{transform: `rotate(${currentDegre[1] + 45}deg)`}}/>
                    <span style={{fontWeight: '300', fontSize: '18px'}}>{currentDegre[0]}</span>                    
                </div>
              </DescriptionDay>
              <DescriptionDay 
                description={'Влажность'}
                descriptionNumber={Math.round(data.current.humidity)}
                descriptionValue={' %'}
                currentTheme={currentTheme}
              />
              <DescriptionDay 
                description={'Видимость'}
                descriptionNumber={Math.round(data.current.visibility)}
                descriptionValue={'км'}
                style={{v1: {height: '162px'}}}
                currentTheme={currentTheme}
              />
              <DescriptionDay 
                description={'Давление'}
                descriptionNumber={Math.round(data.current.pressure / 1.3332239)}
                descriptionValue={'мм рт. ст.'}
                style={{v1: {height: '162px'}, pressure: {fontSize: '18px'}}}
                currentTheme={currentTheme}
              />
            </div>
          )
        }
      }
    </Downloading>
  )
}
