import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { getPopularMovies } from 'services/api';
import { Container } from './MovieDetails.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getPopularMovies()
      .then(data => setTrending(data.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <Container>
      <h2>Trending today:</h2>
      <MoviesList films={trending}></MoviesList>
    </Container>
  );
};

export default Home;
