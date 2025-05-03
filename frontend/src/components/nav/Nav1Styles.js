import styled from 'styled-components';

export const NavContainer = styled.nav`
  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
  margin-top: 10px;

  .active {
    background-color: #ff8a00;
    color: #fff;
  }

  @media screen and (max-width: 1200px) {
    /* gap: 20px; */
  }
`;

export const NavLinkBox = styled.li`
  position: relative;
  a {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease all;
    text-transform: uppercase;
    color: #2c2b31;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
    color: #2c2b31;
    padding-left: 19px;
    padding-right: 19px;
    text-transform: uppercase;

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
      color: #fff;
      text-decoration: none;

      &::before {
        width: 100%;

        left: 0;
        right: auto;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    /* a {
      font-size: 1rem;
    } */
  }
`;
