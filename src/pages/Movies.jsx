import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchFilmsByName } from 'services/api';
import { Container, Form, Button } from './MovieDetails.styled';

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
  };
  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <input type="text" onInput={e => setQuery(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>

      <MoviesList films={films.results}></MoviesList>
    </Container>
  );
};

export default Movies;
