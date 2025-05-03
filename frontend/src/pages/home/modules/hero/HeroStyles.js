import styled, { css } from 'styled-components';
import sliderPix1 from '../../../../assets/heroSlider2.jpeg';
import sliderPix2 from '../../../../assets/heroSlider3.jpeg';
import sliderPix3 from '../../../../assets/heroSlider4.png';
import sliderPix4 from '/images/index.jpg';
import courseImg from '../../../../assets/awsdeveloper.png';


export const HeroContainer = styled.div`
  /* border: 2px solid red; */
  position: relative;
`;

export const HeroSliderContainer = styled.div`
  margin: auto;
`;
export const HeroSliderInfoContainer = styled.div`
  width: 1200px;
  /* border: 2px solid green; */
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const HeroSliderInfoLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 950px) {
    img {
      width: 200px;
    }
  }

  @media screen and (max-width: 650px) {
    img {
      width: 150px;
    }
  }

  @media screen and (max-width: 420px) {
    img {
      width: 120px;
    }
  }
`;

export const HeroSliderTitle = styled.h1`
  color: #fff;
  font-size: 6rem;
  text-transform: capitalize;
  font-size: 72px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
  width: 100%;

  @media screen and (max-width: 950px) {
    font-size: 52px;
  }

  @media screen and (max-width: 650px) {
    font-size: 32px;
  }

  @media screen and (max-width: 420px) {
    width: 300px;
    margin: auto;
    font-size: 28px;
  }
`;
export const HeroSliderDesc = styled.p`
  max-width: 670px;
  font-size: 15px;
  line-height: 2;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;

  @media screen and (max-width: 950px) {
    width: 500px;
    font-size: 12px;
  }

  @media screen and (max-width: 650px) {
    width: 500px;
    padding: 0 10px;
    line-height: 1.4;
  }

  @media screen and (max-width: 550px) {
    max-width: 350px;
    width: 100%;
    padding: 0 10px;
  }

  @media screen and (max-width: 370px) {
    max-width: 300px;
    width: 100%;
    padding: 0 5px;
  }

  @media screen and (max-width: 320px) {
    max-width: 270px;
    width: 100%;
    padding: 0 5px;
  }
`;

export const HeroSliderButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  /* :hover {
    background: #ffae00;
  } */
  a {
    display: flex;
    height: 47px;
  }
  button {
    background: #ff8a00;
    padding: 0 10px;
    text-transform: capitalize;
    color: #fff;
    transition: 0.5s ease all;
    width: 150px;
  }

  div {
    color: yellow;

    height: inherit;
    width: 44px;
    background-color: #ff6600;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease all;
  }
  svg {
    font-size: 16px;
    color: yellow;
  }

  :hover > button {
    background: #ffae00;
  }
  :hover > div {
    background: #fd7e14;
  }

  @media screen and (max-width: 550px) {
    button {
      height: 35px;
      padding: 0 5px;
      width: 100px;
      font-size: 10px;
      font-weight: bold;
    }

    div {
      height: 35px;
      width: 30px;
    }

    svg {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 370px) {
    gap: 10px;
  }
`;
export const HeroSliderBgContainer = styled.div`
  width: 100%;
  position: relative;

  ${(props) =>
    props.slider === 'slider1' &&
    css`
      background: url(${sliderPix4});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding-top: 52%;

      @media screen and (max-width: 950px) {
        padding-top: 72%;
      }

      @media screen and (max-width: 550px) {
        padding-top: 82%;
      }

      @media screen and (max-width: 420px) {
        padding-top: 92%;
      }

      @media screen and (max-width: 370px) {
        padding-top: 102%;
      }

      @media screen and (max-width: 320px) {
        padding-top: 150%;
      }
    `}
`;

export const HeroCardContainer = styled.div`
  display: flex;
  max-width: 900px;
  position: absolute;
  right: 250px;
  bottom: -260px;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    right: 100px;
    bottom: -290px;
  }

  @media screen and (max-width: 1100px) {
    right: 20px;
    bottom: -330px;
  }

  @media screen and (max-width: 950px) {
    right: 0px;
    bottom: -220px;
  }

  @media screen and (max-width: 900px) {
    position: relative;
    right: 0;
    bottom: 0;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    margin: 20px auto;
  }
`;

export const HeroCardInfo = styled.div`
  width: 450px;
  height: 400px;
  background: #f2f1f8;
  padding: 50px;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 350px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px;
  }
`;

export const HeroCardInfoTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const HeroCardInfoSubTitle = styled.p`
  padding-bottom: 20px;

  @media screen and (max-width: 420px){
    line-height: 20px;
  }
`;

export const HeroCardInfoPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 31px;
    background: #ff6600;
    color: #fff;
    text-transform: capitalize;
  }

  p {
    font-size: 20px;
    text-transform: capitalize;

    span {
      color: #fd7e14;
    }
  }

  @media screen and (max-width: 420px){
    a {
      width: 100px;
      font-size: 12px;
    }

    p {
      font-size: 15px;
    }
  }
`;


export const HeroCardImg = styled.div`
  width: 450px;
  height: 400px;
  background: #868e96;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 350px;
    margin: auto;
    text-align: center;

    img {
      width: 70%;
      height: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    width: 100%;


    img {
      width: 100%;
      height: 100%;
    }
  }
`;
