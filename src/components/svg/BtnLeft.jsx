import React from 'react'

export default function BtnLeft({opacity, fill}) {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity={opacity} cx="19" cy="19" r="19" transform="rotate(-180 19 19)" fill={fill}/>
      <path opacity={opacity} d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5" stroke="#ACACAC" strokeWidth="3"/>
    </svg>
  )
}
