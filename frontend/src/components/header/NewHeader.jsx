import React, { useState } from 'react';
import * as Styles from './NewHeaderStyles';
import FadeIn from '../FadeIn2';
import Nav from '../nav/Nav1';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NewHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Styles.Header>
      <Styles.HeaderContainer>
        <Styles.HeaderLogo to='/'>
          <h1>icrosoft</h1>
        </Styles.HeaderLogo>
        <Nav openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Styles.HeaderButtonWrapper>

          <Link>
            <button>register/login</button>
          </Link>
        </Styles.HeaderButtonWrapper>
        <Styles.HeaderMenu onClick={() => setOpenSidebar((prev) => !prev)}>
          <FaBars />
        </Styles.HeaderMenu>
      </Styles.HeaderContainer>
    </Styles.Header>
  );
};

export default NewHeader;
