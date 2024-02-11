import React, { useState, useEffect } from "react";
import { getCity } from "../utils/getCity";

function SearchBar({ onSearch, recentSearches, unit, setUnit }) {
  const [city, setCity] = useState("");
  const [vis, setVis] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!city.trim()) {
      setSuggestions([]);
      return;
    }

    let active = true;
    getCity(city).then((matchedCities) => {
      if (active) {
        setSuggestions(matchedCities);
      }
    });
    return () => {
      active = false;
    };
  }, [city]);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".search-bar")) {
        setVis(false);
      }
    };
    if (vis) {
      document.addEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [vis]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }
    setVis(false);
    if (suggestions.length > 0) {
      const { lat, lon, display_name } = suggestions[0];
      onSearch(lat, lon, display_name);
    } else {
    }
    setSuggestions([]);
    setCity("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="form-inline mt-2 mt-md-0 myform">
        <input
          className="form-control mr-sm-2 inputf"
          type="text"
          placeholder="Search City"
          onFocus={() => {
            setVis(true);
          }}
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="input-group-append foot">
          <button className="btn btn-success" type="submit">
            Search
          </button>
          <div className="form-check form-switch myswitch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={unit === "imperial"}
              onChange={(e) => {
                const newUnit = e.target.checked ? "imperial" : "metric";
                setUnit(newUnit);
              }}
            />
            <label
              className="form-check-label mylabel"
              htmlFor="flexSwitchCheckDefault"
            >
              {unit === "imperial" ? "°F" : "°C"}
            </label>
          </div>
        </div>
      </form>
      {vis &&
        (suggestions.length > 0 ? (
          <ul className="list-group">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{ cursor: "pointer", border: "1px solid gray" }}
                onClick={() => {
                  setCity(suggestion.display_name);
                  setSuggestions([]);
                  setVis(false);
                  setTimeout(
                    () =>
                      onSearch(
                        suggestion.lat,
                        suggestion.lon,
                        suggestion.display_name
                      ),
                    1000
                  );
                }}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-group">
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{
                  cursor: "pointer",
                  fontStyle: "italic",
                  color: "grey",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  setCity(search.cityname);
                  setSuggestions([]);
                  setVis(false);
                  setTimeout(() => {
                    onSearch(search.lat, search.lon, search.cityname);
                  }, 1000);
                }}
              >
                {search.cityname}
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default SearchBar;
