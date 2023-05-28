import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import noImage from '../images/no-image.jpg';
import { movieDetails } from 'services/api';
import { Suspense } from 'react';
import { Loader } from '../components/Loader/Loader';
import { Image } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    movieDetails(movieId)
      .then(response => setMovieInfo(response))
      .catch(err => console.error(err));
  }, [movieId]);

  const data = new Date(movieInfo.release_date).getFullYear();
  const rating = parseInt(movieInfo.vote_average * 10);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <Image
        src={
          movieInfo?.poster_path
            ? IMAGES_BASE_URL + movieInfo?.poster_path
            : noImage
        }
        alt={movieInfo.title}
      />
      <h2>
        {movieInfo.title} ({data})
      </h2>
      <p>{rating}%</p>
      <h3>Overview</h3>
      <p>{movieInfo.overview}</p>
      <h3>Genres</h3>
      <p>{movieInfo?.genres?.map(genre => genre.name).join(' ')}</p>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
