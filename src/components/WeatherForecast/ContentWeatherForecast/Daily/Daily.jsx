import React from 'react';
import TemplateButton from '../../TemplateButton/TemplateButton';
import Downloading from '../../../UI/isDownload/Downloading';
import {OPTION_DATE} from '../../../utylites/Date';
import {stylesTheme} from '../../../utylites/chooseGlobalStylesTheme';

export default function Daily({cl, arrVisibility, data, isDownloading, currentTheme}) {
  return (
    <Downloading isDownload={isDownloading}>
    {
      () => {
        return arrVisibility.map((item, index) => {
          if (item) {
            const currentItem = {
              key: index,
              weekOrHourDay: index === 0 ? 'Завтра': new Date(data.daily[index + 1].dt * 1000).toLocaleString('ru', OPTION_DATE).slice(0, -1), 
              day: `${Math.round(data.daily[index + 1].temp.day)} °C`, 
              night: `${Math.round(data.daily[index + 1].temp.night)} °C`, 
              backgroundImage: `url(http://openweathermap.org/img/wn/${data.daily[index + 1].weather[0].icon}@2x.png)`, 
              type: 'week'
            }
            return  <TemplateButton 
                      key={currentItem.key}
                      data={currentItem}
                      cl={cl}
                      style={{backgroundColor: stylesTheme[currentTheme[0]].backgroundColor}}
                    />
          } else return null
        })
      }
    }
  </Downloading>
  )
}
