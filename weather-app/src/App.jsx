import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54343f9d4e3f2f1b987c1bd5982c9011&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>

      <SearchBar onSearch={getWeather} />

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;