import styled from 'styled-components';

export const AboutHeroContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: url(/images/about.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 42%;
  position: relative;

  @media screen and (max-width: 550px) {
   height: 50vh;
  }
`;

export const AboutHeroInfoContainer = styled.div`
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 60px;
    color: #fff;
  }

  @media screen and (max-width: 550px) {
  width: 100%;

    h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 380px) {

    h1 {
      font-size: 30px;
    }
  }
`;
