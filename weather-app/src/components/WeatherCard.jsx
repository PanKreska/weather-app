export default function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;

  return (
    <div className="card">
      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].main}</p>
    </div>
  );
}