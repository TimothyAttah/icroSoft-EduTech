import styled from "styled-components";

export const CountContainer = styled.div`
  width: 100%;
  background-color: #555;
  margin-top: 80px;
`;

export const CountListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 10px;

  @media screen and (max-width: 550px) {
   flex-direction: column;
  }
`;
export const CountList = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 750px) {
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    width: 250px;
    height: 100px;
  }
`;

export const ProgressValue = styled.h2`
  font-size: 3.3rem;
  @media screen and (max-width: 750px) {
    font-size: 3rem;
  }
`;

export const CountText = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;

  @media screen and (max-width: 750px) {
    font-size: 0.6rem;
  }
`;
