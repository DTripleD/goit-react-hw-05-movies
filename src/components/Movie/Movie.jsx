import { Image } from './Movie.style';
import noImage from '../../images/no-image.jpg';
import PropTypes from 'prop-types';

const Movie = ({
  movieInfo: {
    release_date,
    vote_average,
    poster_path,
    title,
    overview,
    genres,
  },
}) => {
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const data = new Date(release_date).getFullYear();
  const rating = parseInt(vote_average * 10);

  return (
    <>
      <Image
        src={poster_path ? IMAGES_BASE_URL + poster_path : noImage}
        alt={title}
      />
      <h2>
        {title} ({data})
      </h2>
      <p>{rating}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.map(genre => genre.name).join(' ')}</p>
    </>
  );
};

export default Movie;

Movie.propTypes = {
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
