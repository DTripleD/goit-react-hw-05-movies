import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMembers } from 'services/api';
import noImage from '../../images/no-image.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getCastMembers(movieId)
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ profile_path, cast_id, name, character }) => (
          <li key={cast_id}>
            <img
              src={profile_path ? IMAGES_BASE_URL + profile_path : noImage}
              alt={name}
              width="100px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
