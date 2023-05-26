import { Routes, Route, NavLink } from 'react-router-dom';
import { AppWrapper, Nav } from './App.styled';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #ff0000;
  }
`;

export const App = () => {
  return (
    <AppWrapper>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId'" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};
