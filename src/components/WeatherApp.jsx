import { useState, useEffect } from "react";

function WeatherApp() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [weather, setWeather] = useState(null);

  // Enlem ve boylam bilgileri eklendi
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

  useEffect(() => {
    fetch("http://localhost:5500/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch((err) => console.error("Countries API Error:", err));
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const countryData = countries.find((c) => c.country === country);
    setCities(countryData ? countryData.cities : []);
    setSelectedCity("");
    setWeather(null);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // ÖRNEK KOORDİNATLAR (Gerçek uygulamada şehir bilgisine göre bakılmalı)
    let lat = 39.7191;
    let lon = 43.0503;

    // Ağrı örneği için sabit (API'den dinamik getirebilirsin)
    if (city === "Ağrı") {
      lat = 39.7191;
      lon = 43.0503;
    }

    setCoordinates({ lat, lon });

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Open-Meteo Response:", data);
        setWeather(data.current_weather);
      })
      .catch((err) => console.error("Open-Meteo API Error:", err));
  };

  return (
    <div style={{ 
      padding: '2rem', 
      background: '#f8f8f8', 
      borderRadius: '8px', 
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
        <h2 style={{ color: '#457B9D' }}>🌍 Select Country and City for Weather</h2>
  

      <select
        onChange={handleCountryChange}
        style={{ padding: "0.5rem", marginRight: "1rem", borderRadius: "5px" }}
      >
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      {cities.length > 0 && (
        <select
          onChange={handleCityChange}
          style={{ padding: "0.5rem", borderRadius: "5px" }}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}

      {weather && (
        <div style={{ marginTop: "2rem" }}>
          <h3>🌤️ Weather in {selectedCity}</h3>
          <p>🌡️ Temperature: {weather.temperature} °C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
          <p>🧭 Wind Direction: {weather.winddirection}°</p>
        </div>
      )}

      {!weather && selectedCity && (
        <div style={{ marginTop: "2rem", color: "red" }}>
          Hava durumu verisi bulunamadı veya API hatası.
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
