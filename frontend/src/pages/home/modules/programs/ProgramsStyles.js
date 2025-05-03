import styled from "styled-components";

export const ProgramsContainer = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 30px auto;
  margin-top: 350px;

  h1 {
    text-align: center;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 1.5rem;
      padding-bottom: 30px;
    }
  }
`;

export const ProgramsListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  @media screen and (max-width: 400px) {
   padding: 20px;
  }
`;

export const ProgramsList = styled.div`
  width: 300px;
  height: 320px;
  box-shadow: 10px 10px 15px -2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const ProgramsImgContainer = styled.div`
  width: 180px;
  height: 120px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProgramsInfoContainer = styled.div`
  padding-top: 20px;

  h4 {
    font-size: 1.2rem;
  }

  p,small {
    color: #777;

    span {
      color: #222;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 0;

  }

  button {
    width: 100%;
    height: 40px;
    margin:  15px 0;
    text-transform: capitalize;
    font-size: 0.8rem;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 5px;
  }

`;
