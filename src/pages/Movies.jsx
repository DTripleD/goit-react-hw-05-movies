import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchFilmsByName } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const params = searchParams.get('query');
    if (!params) {
      return;
    }

    searchFilmsByName(params)
      .then(data => setFilms(data))
      .catch(err => console.error(err));
  }, [searchParams]);

  const onFormSubmit = event => {
    event.preventDefault();

    if (!query) {
      alert('Enter something');
      return;
    }

    setSearchParams({ query });
    // setQuery('');
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" onInput={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <MoviesList films={films.results}></MoviesList>
    </>
  );
};

export default Movies;
