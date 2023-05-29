import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ films }) => {
  const location = useLocation();
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  console.log(films)

  return (
    <div>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <div>
              <img src={IMAGES_BASE_URL + film.poster_path } alt="" width='200px'/>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.name || film.title}
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

// MoviesList.propTypes = {
//   films: PropTypes.arrayOf{ },
// };
