const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c',
  },
};

const baseURL = 'https://api.themoviedb.org/3/';

export const searchFilmsByName = async params => {
  const response = await fetch(
    `${baseURL}search/movie?query=${params}&include_adult=false&language=en-US&page=1`,
    options
  );
  return await response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(
    `${baseURL}/trending/all/day?language=en-US`,
    options
  );
  return await response.json();
};

export const getCastMembers = async id => {
  const response = await fetch(
    `${baseURL}movie/${id}/credits?language=en-US`,
    options
  );
  return await response.json();
};

export const getMovieReview = async id => {
  const response = await fetch(
    `${baseURL}movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return await response.json();
};

export const movieDetails = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return await response.json();
};
