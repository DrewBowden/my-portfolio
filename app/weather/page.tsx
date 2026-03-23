"use client";
import { useState } from "react";
import Link from "next/link";

type WeatherData = {
  name: string;
  sys: { country: string };
  main: { temp: number; feels_like: number; humidity: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
};

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data.error) {
      setError(`Couldn't find "${city}". Please check the spelling and try again.`);
    } else {
      setWeather(data);
    }
    setLoading(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-8 md:px-24 py-24">
      {/* Back link */}
      <Link href="/#projects" className="text-indigo-400 text-sm font-mono hover:text-indigo-300 transition-colors mb-12 inline-block">
        ← Back to portfolio
      </Link>

      {/* Header */}
      <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">Side Project</p>
      <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
      <p className="text-white/50 mb-10 max-w-md">
        Built with Next.js and the OpenWeatherMap API. Type a city name to get the current weather.
      </p>

      {/* Search */}
      <div className="flex gap-3 max-w-md mb-10">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a city name..."
          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg font-medium transition-colors"
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-400 text-sm mb-6">{error}</p>
      )}

      {/* Results */}
      {weather && (
        <div className="max-w-md bg-white/5 border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-16 h-16"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-white/50 capitalize">{weather.weather[0].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/40 text-xs font-mono uppercase mb-1">Temperature</p>
              <p className="text-white text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/40 text-xs font-mono uppercase mb-1">Feels Like</p>
              <p className="text-white text-2xl font-bold">{Math.round(weather.main.feels_like)}°C</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/40 text-xs font-mono uppercase mb-1">Humidity</p>
              <p className="text-white text-2xl font-bold">{weather.main.humidity}%</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/40 text-xs font-mono uppercase mb-1">Wind Speed</p>
              <p className="text-white text-2xl font-bold">{weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
