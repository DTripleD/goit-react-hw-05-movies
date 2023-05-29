import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  ListOfMovies,
  MoviesListItem,
  StyledLink,
  ImgWrapper,
  MovieImg,
  SeeMore,
  NameWrapper,
  FilmName,
} from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  console.log(films);

  return (
    <div>
      <ListOfMovies>
        {films?.map(film => (
          <MoviesListItem key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              <ImgWrapper>
                <MovieImg src={IMAGES_BASE_URL + film.poster_path} alt="" />
                <SeeMore className="see-more">See more</SeeMore>
              </ImgWrapper>

              <NameWrapper>
                <FilmName>{film.name || film.title}</FilmName>
              </NameWrapper>
            </StyledLink>
          </MoviesListItem>
        ))}
      </ListOfMovies>
    </div>
  );
};

export default MoviesList;

// MoviesList.propTypes = {
//   films: PropTypes.arrayOf{ },
// };
