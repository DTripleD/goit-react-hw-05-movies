import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Nav } from '../App/App.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
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
  return (
    <div>
      <Nav>
        <StyledLink to="/" active="true">
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
