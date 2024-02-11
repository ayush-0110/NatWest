import React from "react";

function WeatherDisplay({ weatherData, unit }) {
  if (!weatherData) return <p>No data to display.</p>;
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "miles/h";
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return (
    <div className="weatherform">
        <div style={{width:'100%', textAlign:'center', height:'10%'}}>

      <h2>{weatherData.name}</h2>
        </div>
      <div className="formcontent">
        <div className="image">
          <img src={iconUrl} alt="weather"></img>
        </div>
        <div className="content">
          <p>
            Temperature: {weatherData.main.temp} {tempUnit}
          </p>
          <p>
            Pressure: {weatherData.main.pressure} 
          </p>
          <p>
            Humidity: {weatherData.main.humidity}
          </p>
          <p>Condition: {weatherData.weather[0].main}</p>
          <p>
            Wind Speed: {weatherData.wind.speed} {windUnit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
