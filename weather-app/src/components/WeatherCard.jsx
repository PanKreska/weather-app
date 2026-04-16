export default function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].main}</p>
    </div>
  );
}