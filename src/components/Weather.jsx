import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Weather.scss"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '5fbeb9f4991bee837497b7c7d1cc742e'; // Reemplaza con tu API Key de OpenWeatherMap
  const CITY_NAME = 'Pereira'; // Reemplaza con la ciudad del evento

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener los datos del clima');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Cargando clima...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='weatherApi'>
      
      {weatherData && (
          <h3>En este momento {CITY_NAME} está a {weatherData.main.temp}°C  con una humedad del {weatherData.main.humidity}%.  </h3>
       
      )}
    </div>
  );
};

export default Weather;
