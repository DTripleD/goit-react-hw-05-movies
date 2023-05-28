import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import noImage from '../images/no-image.jpg';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setMovieInfo(response))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <img
        src={
          movieInfo?.poster_path
            ? IMAGES_BASE_URL + movieInfo?.poster_path
            : noImage
        }
        alt={movieInfo.title}
        width="200px"
      />
      <h2>{movieInfo.title}</h2>
      <p></p>
      <h3>Overview</h3>
      <p>{movieInfo.overview}</p>
      <h3>Genres</h3>
      <p>{movieInfo?.genres?.map(genre => genre.name).join(', ')}</p>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
