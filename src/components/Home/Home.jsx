import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(data => setTrending(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {trending.map(film => (
          <li key={film.id}>
            {film.name || film.title}
            {/* <Link to={}>{film.name || film.title}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
