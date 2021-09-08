import React from 'react';
import cl from './Sidebar.module.css';
import CurrentDay from './CurrentDay/CurrentDay';
import SearchPanel from './SearchPanel/SearchPanel';

export default function Sidebar({currentTheme, setCurrentTheme, city, data, setQuery, isVisibility, setIsVisibility}) {
  return (
    <div className={cl.Sidebar}>
      <CurrentDay 
        currentTheme={currentTheme} 
        setCurrentTheme={setCurrentTheme}
        city={city}
        data={data}
        isVisibility={isVisibility}
        setIsVisibility={setIsVisibility}
      />
      <SearchPanel setQuery={setQuery} isVisibility={isVisibility} setIsVisibility={setIsVisibility}/>
    </div>
  )
}
