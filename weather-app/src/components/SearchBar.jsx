import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Szukaj</button>
    </form>
  );
}