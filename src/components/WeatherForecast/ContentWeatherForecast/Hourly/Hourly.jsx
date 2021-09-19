import React from 'react';
import TemplateButton from '../../TemplateButton/TemplateButton';
import Downloading from '../../../UI/isDownload/Downloading';
import {OPTION_DATE, OPTION_TIME} from '../../../utylites/Date';
import {stylesTheme} from '../../../utylites/chooseGlobalStylesTheme';

export default function Daily({cl, arrVisibility, data, isDownloading, currentTheme}) {
  return (
    <Downloading isDownload={isDownloading}>
      {
        () => {
          return data.map((item, index) => {
              const currentItem = {
                key: index,
                weekOrHourDay: index === 0 
                                    ? 'Завтра'
                                    : `${new Date(item.dt * 1000).toLocaleString('ru', OPTION_DATE).slice(0, -1)} \n 
                                       ${new Date(item.dt * 1000).toLocaleString('ru', OPTION_TIME)}`, 
                day: `${Math.round(item.temp)} °C`, 
                backgroundImage: `url(http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png)`, 
                type: 'hour'
              }
              return  <TemplateButton 
                        key={currentItem.key}
                        data={currentItem}
                        cl={cl}
                        style={{
                                backgroundColor: stylesTheme[currentTheme[0]].backgroundColor,
                                display: arrVisibility[index] ? 'grid' : 'none',
                              }}
                      />
          })
        }
      }
    </Downloading>
    )
  }