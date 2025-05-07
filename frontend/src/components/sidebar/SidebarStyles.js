import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div)`
  width: 280px;
  height: 100vh;
  position: absolute;
  position: fixed;
  right: 0;
  top: 0px;
  background-color: #04044f;
  background-color: #fff;
  /* background: linear-gradient(90deg, rgb(66, 2, 194) 0%, rgb(0, 78, 194) 100%); */
  z-index: 99999;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  z-index: 99999;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  display: none;
  padding: 20px;

  .diff {
    /* border: 1px solid orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    /* padding: 20px; */
    transition: 0.8s ease all;
    border-radius: 6px;
    padding-bottom: 10px;

    a {
      color: #fff;
      color: orange;
      color:#000;

      &::after {
        background-color: orange;
      }
    }

    &:hover {
      border-bottom: 0;
    }
  }
  @media screen and (max-width: 950px) {
    display: flex;
  }
`;

export const SidebarCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: inherit;
  color: #fff;
  color: #000;
  cursor: pointer;
  font-size: 22px;
  z-index: 999;
`;

export const SidebarListBox = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const NavLinkBox = styled.li`
  position: relative;
  width: 100%;
  z-index: 999;

  a {
    display: flex;
    color: #fff;
    color: #000;
    text-transform: uppercase;
    line-height: 25px;
    width: 100%;
    padding-bottom: 10px;
    z-index: 999;

    &::after {
      content: '';
      position: absolute;
      bottom: -20%;
      left: -3%;
      width: 0%;
      height: 5px;
      background-color: #fff;
      color: #000;
      border-radius: 30px;
      transition: width 0.8s ease;
    }

    &:hover::after {
      width: 106%;
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 5px;
  width: 15rem;
  transform: translateY(30px);
  opacity: 0;
  pointer-events: none;
  transition: 0.8s;
  background-color: #fff;
  color: #000;
  overflow: hidden;
  z-index: 999;
  padding-left: 20px;
`;

  export const Dropdown = styled.ul`
    position: relative;
  `;

  export const DropdownLink = styled.li`
    position: relative;
    z-index: 999;

    > a {
      display: flex;
      background-color: #fff;
      color: #000;
      z-index: 999;

      padding: 0.8rem 1rem;
      font-size: 0.9rem;
      align-items: center;
      justify-content: space-between;
      transition: 0.3s;
      text-transform: uppercase;

      &:hover {
        transform: translateX(10px);
      }
    }
  `;

export const SidebarInfo = styled.div`
  margin-top: 100px;
  padding: 20px;
  background-color: #04044f;
  width: 100%;
  z-index: 999;

  div {
    margin-bottom: 30px;

    h4 {
      text-transform: capitalize;
      font-size: 20px;
      padding-bottom: 10px;
    }

    p {
      line-height: 23px;
    }
  }
`;
