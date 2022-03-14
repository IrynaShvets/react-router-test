import Axios from 'axios';

const API_KEY = 'd3c00761eff125b45afbcd52d8235bc7';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async page => {
  const response = await Axios.get(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`,
  );
  return response.data;
};

export const fetchMovies = async (query, page) => {
  const response = await Axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );

  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await Axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const fetchCastByMovieId = async id => {
  const response = await Axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );

  return response.data;
};

export const fetchReviewsByMovieId = async id => {
  const response = await Axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );

  return response.data;
};
