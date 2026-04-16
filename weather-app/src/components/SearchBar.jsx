import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;

        onSearch(city);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Wpisz miasto..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit">Szukaj</button>
        </form>
    );
}
