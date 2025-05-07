import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Styles from './SidebarStyles';
import { CloseBackground } from '../CloseBackground';
import { newNavData } from '../nav/Nav1';
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import FadeIn from '../FadeInView';

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const handleClose = () => {
    setOpenSidebar(false);
    // location.reload();
  };

  const showAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1.25,
        type: 'tween',
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.25,
        type: 'tween',
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <>
      {openSidebar && <CloseBackground close={() => handleClose()} />}
      <Styles.SidebarContainer
        variants={showAnimation}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Styles.SidebarCloseBtn onClick={() => setOpenSidebar(false)}>
          <AiOutlineClose />
        </Styles.SidebarCloseBtn>
        <Styles.SidebarWrapper>
          <Styles.SidebarListBox>
            {newNavData.map((item, i) => (
              <FadeIn key={i} delay={(i + 1) * 0.2} direction='down'>
                <Styles.NavLinkBox
                  className={item.diff ? 'diff' : ''}
                  onClick={handleClose}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                </Styles.NavLinkBox>
              </FadeIn>
            ))}
          </Styles.SidebarListBox>
        </Styles.SidebarWrapper>
      </Styles.SidebarContainer>
    </>
  );
};

export default Sidebar;
