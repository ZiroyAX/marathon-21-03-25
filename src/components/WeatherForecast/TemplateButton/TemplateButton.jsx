import React from 'react'

export default function TemplateButton({data, cl, style}) {
  const {weekOrHourDay, day, night, backgroundImage, type} = data;
  return (
    <button className={cl.card} style={{backgroundImage: backgroundImage, ...style}}>
      <p className={cl.cardT}>{weekOrHourDay}</p>
      {
        type === 'hour' 
        ? <p className={cl.cardB}>{day}</p> 
        : type === 'week' 
          ? <>
              <p className={cl.cardLB}>{day}</p>
              <p className={cl.cardRB}>{night}</p>
            </>
          : null
      }
      
    </button>
  )
}
