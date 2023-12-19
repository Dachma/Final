import { useState } from "react";
import { useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Universities from "./components/UniversityList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Weather from "./components/Weather";
import { WeatherContext } from "./context/WeatherContext";

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [data, setData] = useState();
  const [selectedCountry, setSelectedCountry] = useState([]);

  const countryList = [
    { value: "Georgia", label: "Georgia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
    { value: "Malta", label: "Malta" },
    { value: "Thailand", label: "Thailand" },
    { value: "Philippines", label: "Philippines" },
  ];

  const fetchWeather = async () => {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=46d2be9c7b164e418d8162518231612&q=Tbilisi&aqi=no "
    );
    const data = await response.json();
    setWeatherData(data);
  };

  const fetchData = async () => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${selectedCountry?.value}&fbclid=IwAR1ahbHD95eun202wbYgAuOmf72yI5vaJJ8Tc8rTvicLQJHOJe4ldb4q3zI`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <header>
                <Weather />
              </header>
              <Dropdown
                options={countryList}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
              {data?.length > 1 ? (
                <Universities
                  uniList={data}
                  selectedCountry={selectedCountry}
                />
              ) : (
                ""
              )}
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WeatherContext.Provider>
  );
};

export default App;
