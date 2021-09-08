import React, {useState, useEffect} from 'react';
import cl from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import {stylesTheme} from './components/utylites/chooseGlobalStylesTheme';
import useFetchWeather from './components/hooks/useFetchWeather';
// import {CSSTransition} from 'react-transition-group';

function App() {
  const [currentTheme, setCurrentTheme] = useState(['white', 'black']);
  const [query, setQuery] = useState('Петровск');
  const [city, data, isDownloading] = useFetchWeather(query);

  const [isVisibility, setIsVisibility] = useState(false);


  // setTimeout(() => {
  //   setQuery('Samara');
  // }, 5000);

  useEffect(() => {
    const currentData = stylesTheme[currentTheme[0]];
    document.documentElement.style.setProperty('--main-color-text', currentData.color);
    document.documentElement.style.setProperty('--second-color-text', currentData.colorSecond);
    document.documentElement.style.setProperty('--backgroundColor', currentData.backgroundColor);
    document.documentElement.style.setProperty('--bodyColor', currentData.bodyColor);
  }, [currentTheme])

  return (
    <div className={cl.App} style={{backgroundColor: 'initial'}}>
      <Sidebar 
        currentTheme={currentTheme} 
        setCurrentTheme={setCurrentTheme}
        city={city}
        data={data}
        isVisibility={isVisibility}
        setIsVisibility={setIsVisibility}
        setQuery={setQuery}
      />
      <WeatherForecast 
        data={data}
        isDownloading={isDownloading}
        currentTheme={currentTheme}
      />
      {/* <button onClick={() => setIsVisibility(!isVisibility)}>{isVisibility.toString()}</button>
      <CSSTransition
        in={isVisibility}
        timeout={2000}
        classNames={"alert"}
      >
        <div className={cl.box}>{isVisibility.toString()}</div>
      </CSSTransition> */}
    </div>
  );
}

export default App;
