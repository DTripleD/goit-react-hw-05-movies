const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c',
  },
};

const baseURL = 'https://api.themoviedb.org/3/';

export const searchFilmsByName = params => {
  return fetch(
    `${baseURL}search/movie?query=${params}&include_adult=false&language=en-US&page=1`,
    options
  ).then(response => response.json());
};

export const getPopularMovies = () => {
  return fetch(`${baseURL}/trending/all/day?language=en-US`, options).then(
    response => response.json()
  );
};
