import React from 'react'

export default function Downloading(props) {
  function rendering(props) {
    if (typeof props.children === 'object') {
      if (Array.isArray(props.children)) {
        return props.children.map((item) => {
          return typeof item === 'function' ? item(item) : item;
        })
      } else return props.children
    } else if (typeof props.children === 'function') {
      return props.children();
    }
  }

  return (
    <>
      {
        props.isDownload
        ? <>{rendering(props)}</>
        : <div>Загрузка...</div>
      }
    </>
  )
}


