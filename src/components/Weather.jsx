import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="weather-container">
      <h3>{weatherData?.location.name}</h3>
      <h3>{weatherData?.current.temp_c}&deg;</h3>
      <img src={weatherData?.current.condition.icon} alt="weather" />
      <div>{weatherData?.current.condition.text}</div>
    </div>
  );
};

export default Weather;
