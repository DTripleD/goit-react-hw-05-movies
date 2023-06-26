import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { movieDetails } from 'services/api';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import Movie from '../../components/Movie/Movie';
import {
  Container,
  Item,
  List,
  MovieWrapper,
  StyledLink,
  StyledLinkAdditional,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieDetails(movieId)
      .then(response => {
        document.title = response.original_title;
        setMovieInfo(response);
      })
      .then(console.log)
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <Container>
      <MovieWrapper>
        <StyledLink to={backLinkHref.current}>Go back</StyledLink>
        {movieInfo && <Movie movieInfo={movieInfo} />}
        <div>
          <h3>Additional information</h3>
          <List>
            <Item>
              <StyledLinkAdditional to="cast">Cast</StyledLinkAdditional>
            </Item>
            <Item>
              <StyledLinkAdditional to="reviews">Reviews</StyledLinkAdditional>
            </Item>
          </List>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </MovieWrapper>
    </Container>
  );
};

export default MovieDetails;
