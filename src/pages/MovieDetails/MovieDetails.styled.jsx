import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  position: relative;
  background-color: #4caf50;
  border: none;
  font-size: 15px;
  color: #ffffff;
  padding: 10px;
  width: 100px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 75px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
`;

export const StyledLinkAdditional = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  list-style: none;
  padding: 0.5rem 2rem;
  border: 0.2rem solid darkred;
  border-radius: 0.5rem;

  font-size: 1.2rem;

  background-color: darkred;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
