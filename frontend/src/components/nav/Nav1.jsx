import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AiFillHome, AiFillCaretDown } from 'react-icons/ai';
import * as Styles from './Nav1Styles';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import FadeIn from '../FadeIn2';


export const newNavData = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'about us',
    path: '/about_us',
  },
  {
    title: 'courses',
    path: '/courses',
  },
  {
    title: 'news',
    path: '/news',
  },
  {
    title: 'faq',
    path: '/faq',
  },
  {
    title: 'contact',
    path: '/contact_us',
  },
];

const Nav = ({openSidebar,setOpenSidebar}) => {
  return (
    <>
      <Styles.NavContainer>
        <Styles.Nav>
          {newNavData.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction='right'>
              <Styles.NavLinkBox>
                <NavLink to={item.path}>
                  {item.title}
                </NavLink>
              </Styles.NavLinkBox>
            </FadeIn>
          ))}
        </Styles.Nav>
      </Styles.NavContainer>

      <AnimatePresence>
        {openSidebar && (
          <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
