import React, {useState} from 'react';
import cl from './SearchPanel.module.css';
import InputMagnifier from '../../svg/InputMagnifier';

export default function SearchPanel({setQuery, isVisibility, setIsVisibility}) {
  const [currentQuery, setCurrentQuery] = useState('');
  return (
        <div className={cl.SearchPanel} style={isVisibility ? {left: 0} : {left: '-100%'}}>
          <button className={cl.btnClose} onClick={() => setIsVisibility(!isVisibility)}>
            <InputMagnifier />             
          </button>
          <section className={cl.formSearch} action="">
              <input onChange={(e) => setCurrentQuery(e.target.value)} className={cl.inputSearch} style={{backgroundImage: 'url(/image/magnifier.png)'}} type="text" placeholder="Москва"/>
              <input onClick={() => {setQuery(currentQuery); setIsVisibility(!isVisibility)}} className={cl.inputButton} type="submit" value="Найти"/>
          </section>
        </div>
  )
}
