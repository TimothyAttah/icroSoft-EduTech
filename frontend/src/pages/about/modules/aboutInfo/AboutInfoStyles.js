import styled, { css } from 'styled-components';

export const AboutInfoContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;

export const AboutInfoBox = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;

  ${(props) =>
    props.primary &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

export const AboutInfoText = styled.div`
  width: 600px;
  padding: 20px;

  h2 {
    font-size: 40px;
  }

  @media screen and (max-width: 550px) {
    text-align: center;
    width: 100%;
  }
`;
export const AboutInfoImg = styled.div`
  width: 600px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
