import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';

import { movieDetails } from 'services/api';
import { Suspense } from 'react';
import { Loader } from '../components/Loader/Loader';
import Movie from '../components/Movie/Movie';
import { Container, MovieWrapper, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieDetails(movieId)
      .then(response => setMovieInfo(response))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <Container>
      <MovieWrapper>
        <StyledLink to={backLinkHref.current}>Go back</StyledLink>
        <Movie movieInfo={movieInfo} />
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
      </MovieWrapper>
    </Container>
  );
};

export default MovieDetails;
