import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
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

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
