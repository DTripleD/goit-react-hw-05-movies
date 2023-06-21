import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListOfMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const MoviesListItem = styled.li`
  list-style: none;
  flex-basis: calc((100% - 262px) / 6);
  border: 1px solid #eeeeee;
  border-bottom: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover .see-more {
    transform: translateY(80%);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const SeeMore = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(78, 100, 57, 0.9);
  font-size: 18px;
  line-height: 1.56;
  color: #fff;
  text-align: center;
`;

export const NameWrapper = styled.div`
  border: 1px solid #eeeeee;
  border-top: none;
  padding: 20px 24px;
  flex-grow: 1;
`;

export const FilmName = styled.h2`
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
  color: #212121;
  text-align: center;
`;
