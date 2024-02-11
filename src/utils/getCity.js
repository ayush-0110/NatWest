import axios from 'axios';

export const getCity = async (input) => {
  const apiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;
  const url = `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${input}&limit=5`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching city suggestions", error.response ? error.response.data : error.message);
    return [];
  }
};
