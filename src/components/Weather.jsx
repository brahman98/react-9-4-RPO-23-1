import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getWeather(event) {
    event.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru`
      );
      const data = await response.json();

      if (!data.results?.length) {
        throw new Error("Город не найден");
      }

      const place = data.results[0];

      const responseWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      const result = await responseWeather.json();

      if (!responseWeather.ok) {
        throw new Error("Ошибка загрузки погоды");
      }

      setWeather({
        city: place.name,
        temperature: result.current.temperature_2m,
        humidity: result.current.relative_humidity_2m,
        wind: result.current.wind_speed_10m,
      });
    } catch (err) {
      setError(err.message || "Не удалось загрузить погоду");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="weather">
      <h2 className="weather-title">Погода</h2>

      <form onSubmit={getWeather} className="weather-form">
        <input
          className="weather-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
        />
        <button
          className="weather-button"
          disabled={loading}>
          {loading ? "Загрузка..." : "Узнать"}
        </button>
      </form>

      {error && <p className="weather-error">{error}</p>}

      {weather && (
        <div className="weather-result">
          <h3 className="weather-city">{weather.city}</h3>
          <p className="weather-temperature">{weather.temperature} °C</p>
          <div className="weather-details">
            <div className="weather-item">
              <span>Влажность:</span>
              <strong>{weather.humidity}%</strong>
            </div>
            <div className="weather-item">
              <span>Ветер:</span>
              <strong>{weather.wind} км/ч</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Weather;