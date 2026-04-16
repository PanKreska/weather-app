export default function WeatherCard({ weather }) {
    const icon = weather.weather[0].icon;

    return (
        <div className="card weather-card">
            {/* HEADER */}
            <div className="weather-header">
                <h2>
                    {weather.name}, {weather.sys.country}
                </h2>
                <p>{weather.weather[0].main}</p>
            </div>

            {/* MAIN */}
            <div className="weather-main">
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="icon"
                />

                <h1>{Math.round(weather.main.temp)}°C</h1>
            </div>

            {/* DETAILS */}
            <div className="weather-details">
                <div>
                    <span>Odczuwalna</span>
                    <strong>{Math.round(weather.main.feels_like)}°C</strong>
                </div>

                <div>
                    <span>Wilgotność</span>
                    <strong>{weather.main.humidity}%</strong>
                </div>

                <div>
                    <span>Wiatr</span>
                    <strong>{weather.wind.speed} m/s</strong>
                </div>
            </div>
        </div>
    );
}
