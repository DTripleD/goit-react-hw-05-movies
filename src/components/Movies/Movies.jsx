import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?${searchParams.get(
        'name'
      )}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(err => console.error(err));
  }, [searchParams]);

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ name: event.target.querry.value });
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="querry" />
        <button type="submit">Search</button>
      </form>
      {/* <ul>
        {films.map(film => (
          <li>{film.title}</li>
        ))}
      </ul> */}
    </>
  );
};

export default Movies;
