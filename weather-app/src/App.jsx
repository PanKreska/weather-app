import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const key = "54343f9d4e3f2f1b987c1bd5982c9011";
    const getWeather = async (city) => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
            );

            const data = await res.json();

            if (data.cod !== 200) {
                setError("Nie znaleziono miasta");
                setWeather(null);
                return;
            }

            setWeather(data);
        } catch (err) {
            setError("Błąd połączenia");
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    const getBackground = () => {
        if (!weather) return "default";

        const condition = weather.weather[0].main;

        if (condition === "Clear") return "clear";
        if (condition === "Clouds") return "clouds";
        if (condition === "Rain") return "rain";

        return "default";
    };

    return (
        <div className={`app ${getBackground()}`}>
            <h1>🌤 Weather App</h1>
            <SearchBar onSearch={getWeather} />

            {loading && <p>Ładowanie...</p>}

            {error && <p className="error">{error}</p>}

            {!loading && !error && weather && <WeatherCard weather={weather} />}
        </div>
    );
}

export default App;
