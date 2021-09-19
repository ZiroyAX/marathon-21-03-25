import React from 'react';
import cl from './DescriptionDay.module.css';
import {stylesTheme} from '../../utylites/chooseGlobalStylesTheme';

export default function DescriptionDay({description, descriptionNumber, descriptionValue, style, currentTheme, children}) {
  return (
    <div className={cl.DescriptionDay} style={style ? {...style.v1, backgroundColor: stylesTheme[currentTheme[0]].backgroundColor} : {backgroundColor: stylesTheme[currentTheme[0]].backgroundColor}}>
      <p>{description}</p>
      <p className={cl.descriptionNumber}>{descriptionNumber} <span className={cl.descriptionValue} style={style ? style.pressure : null}>{descriptionValue}</span></p>
      {children}
    </div>
  )
}
