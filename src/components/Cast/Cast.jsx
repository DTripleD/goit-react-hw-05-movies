import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMembers } from 'services/api';
import noImage from '../../images/no-image.jpg';
import { List, Item } from './Cast.styled';

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
      <List>
        {cast.map(({ profile_path, cast_id, name, character }) => (
          <Item key={cast_id}>
            <img
              src={profile_path ? IMAGES_BASE_URL + profile_path : noImage}
              alt={name}
              width="120px"
              height="170px"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Cast;
