import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar";
import WeatherDisplay from "./components/weatherDisplay";
import { getWeatherData } from "./utils/getWeatherData";
import Header from "./components/header";
import WeatherBar from "./components/weatherBar";
import Modal from "./components/Modal";
import ErrorModal from "./components/errorModal";

function App() {
  const [activeView, setActiveView] = useState("home");
  const [weatherData, setWeatherData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [unit, setUnit] = useState("metric");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState("");
  const showHome = () => setActiveView("home");
  const showGraphs = () => setActiveView("graphs");
  const backgroundColor =
    weatherData &&
    weatherData.weather &&
    weatherData.weather[0].main === "Clear"
      ? "lightblue"
      : "#bebebea6";
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    console.log("Inside useEffect : ", recentSearches);
  }, [recentSearches]);

  useEffect(() => {
    if (lat && lon) {
      const fetchData = async () => {
        try {
          const data = await getWeatherData(lat, lon, unit);
          setWeatherData(data);
          setError("");
        } catch (error) {
          console.error("Failed to fetch weather data:", error);
          setError("Failed to fetch weather data. Please try again.");
        }
      };

      fetchData();
    }
  }, [lat, lon, unit]);
  const onSearch = (lat, lon, cityname) => {
    setLat(lat);
    setLon(lon);
    const newSearch = { lat, lon, cityname };
    setRecentSearches((prevSearches) => [
      newSearch,
      ...prevSearches.slice(0, 4),
    ]);
    console.log(recentSearches);
  };

  return (
    <div className="maincontainer">
      <Header showHome={showHome} showGraphs={showGraphs} />
      <div className="container mc">
        {activeView === "home" ? (
          <>
            {error && <ErrorModal error={error} setError={setError} />}
            <div
              className="my-5 fcont"
              style={{
                backgroundColor: backgroundColor,
                transitionDuration: "2s",
              }}
            >
              <SearchBar
                onSearch={onSearch}
                recentSearches={recentSearches}
                unit={unit}
                setUnit={setUnit}
              />
              <WeatherDisplay weatherData={weatherData} unit={unit} />
            </div>
          </>
        ) : (
          <>
            <WeatherBar
              setSelectedState={setSelectedState}
              setShowModal={setShowModal}
            />
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              selectedState={selectedState}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
