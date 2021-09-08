import {useState, useEffect, useCallback} from 'react';
import API_KEY from '../utylites/API_KEY';

export default function useFetchWeather(search) {
  const query = useCallback(() => search, [search]);
  const [result, setResult] = useState('');
  const [city, setCity] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    console.log('useFetchWeather');
    setIsDownloading(false);
    fetch(`https://nominatim.openstreetmap.org/search.php?q=${query()}&format=json&addressdetails=1&limit=1`)
    .then(response => response.json())
    .then(result => {
      setCity(result[0].address.city || result[0].address.town);
      const lat = result[0].lat;
      const lon = result[0].lon;
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`)
      .then(response => response.json())
      .then(result => {
        setResult(result);
        setIsDownloading(true);
      });
    });
  }, [query]);

  return [city, result, isDownloading]
}
