import React from 'react'
import Faqs from './faqs/Faqs';
import Events from './events/Events';

import styled from 'styled-components';

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 50px;
`;
const Options = () => {
  return (
    <OptionsContainer>
      <Faqs />
      <Events />
    </OptionsContainer>
  )
}

export default Options
