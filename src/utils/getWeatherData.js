import axios from 'axios';

export const getWeatherData = async (lat,long,unit) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${unit}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    //console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while fetching the weather data.");
    }
  }
};

