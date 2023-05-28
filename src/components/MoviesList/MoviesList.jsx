import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.name || film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
