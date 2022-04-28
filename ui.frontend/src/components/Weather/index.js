import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import axios from 'axios';

import cloudy from '../../assets/cloudy.png';

import { WeatherContainer, Text, Temp, Img } from './style';

const Weather = () => {
  const [location, setLocation] = React.useState(false);
  const [weather, setWeather] = React.useState(false);

  const getWeather = async (lat, long) => {
    const res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: 'ae908f964e905a026750b81e2e7d074e',
        lang: 'pt',
        units: 'metric'
      }
    });
  setWeather(res.data);
}

  React.useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  return <WeatherContainer>
    <Text>{location && weather ? weather.name : '...'} - SC</Text>
    <div>
      <Img src={cloudy} alt="cloud" />
      <Temp>{location && weather ? Math.floor(weather.main.temp) : '...'}º</Temp>
    </div>
  </WeatherContainer>;
};

export default MapTo('reactapp/components/weather')(
  Weather,
);