import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { getPopularMovies } from 'services/api';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getPopularMovies()
      .then(data => setTrending(data.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h2>Trending today:</h2>
      <MoviesList films={trending}></MoviesList>
    </div>
  );
};

export default Home;
