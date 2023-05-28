import { Link } from 'react-router-dom';

const MoviesList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.name || film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
