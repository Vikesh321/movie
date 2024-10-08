// movieApi.js
import axios from 'axios';
import confgiKey from './config';



export const getMovies = async (searchTerm) => {
  let allMovies = [];
  let error = null;
  try {
    for (let page = 1; page <= 10; page++) {
      const URL = `http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${confgiKey.apikey}&page=${page}`;
      const response = await axios.get(URL);

      if (response.data.Response === "True") {
        allMovies = [...allMovies, ...response.data.Search];
      } else {
        error = response.data.Error;
        break;
      }
      if (allMovies.length >= response.data.totalResults) {
        break;
      }
    }
  } catch (err) {
    error = "Failed to fetch data.";
  }

  return { allMovies, error };
};
