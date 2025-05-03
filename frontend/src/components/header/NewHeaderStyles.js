import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  /* background-color: #3ec6ff;
  background-color: #3f51b5;
  background: linear-gradient(90deg, rgb(66, 2, 194) 0%, rgb(0, 78, 194) 100%); */
  color: #fff;
  color:#000;
  width: 100%;
  height: 5rem;
  z-index: 1000;
`;


export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 30px;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  color: #000;

  h1 {
    font-size: 20px;
  }
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  /* gap: 10px; */

  button {
    /* width: 150px; */
    height: 45px;
    padding: 0 10px;
    display: inline-block;
    color: #ff8a00;
    color: #fff;
    color: #000;
    border: 1px solid #000;
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
    text-decoration: none;
    background-color: transparent;
    transition: color 0.8s ease;
    position: relative;
    border-radius: 5px;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #ff8a00;
      width: 0%;
      transition: all 0.8s ease;
      z-index: -1;
    }

    &:hover {
      color: black;
      border: 2px solid #ff8a00;

      &::before {
        width: 100%;

        left: 0;
        right: auto;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    /* button {
      font-size: 10px;
    } */
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeaderMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 900px){
    display: flex;
  }
`;
