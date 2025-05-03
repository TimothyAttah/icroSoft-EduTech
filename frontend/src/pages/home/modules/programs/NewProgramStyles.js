import styled from 'styled-components'

export const ProgramContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 350px;

  @media screen and (max-width: 900px){
    margin-top: 50px;
  }
`;
export const ProgramTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  font-size: 3rem;

  @media screen and (max-width: 900px) {
   font-size: 2.5rem;
  }
`;
export const ProgramSubTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 25px;

  @media screen and (max-width: 900px) {
    max-width: 600px;
    margin: auto;
  }
`;

export const ProgramListsContainer = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ProgramListsContainerMedium = styled.div`
  margin-top: 80px;
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const ProgramListsContainerSmaller= styled.div`
  margin-top: 80px;
  display: none;
  @media screen and (max-width: 550px) {
    display: block;
  }
`;

export const ProgramListItemContainer = styled.div`
  width: 400px;
  overflow: hidden;
`;
export const ProgramImg = styled.div`
  width: 100%;
  height: 250px;
  margin: 0 20px;

  img {
    width: 70%;
    height: 100%;
    margin: auto;
  }
`;
export const ProgramInfo = styled.div`
  width: 100%;
  height: 370px;
  background: #868e96;
  background: #f2f1f8;

  margin: 0 20px;
  padding: 20px;
  padding-right: 50px;
  /* text-align: center; */

  @media screen and (max-width: 900px) {
    height: auto;
  }


`;

export const ProgramInfoTitle = styled.h2`
  text-align: center;
  margin: 15px 0;

  @media screen and (max-width: 900px) {
   font-size: 30px;
  }
`;
export const ProgramInfoSubTitle = styled.p`
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 550px) {
    text-align: center;
  }
`;


export const ProgramingCardInfoPrice = styled.div`
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

  @media screen and (max-width: 900px) {
   flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    a {
      width: 100px;
      font-size: 12px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const DurationBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  text-align: center;
  h5 {

    font-size: 16px;
    line-height: 22px;
  }

`;
