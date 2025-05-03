import styled from "styled-components";


export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  /* background-color: navy; */
  /* color: #fff; */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;

  }

  @media screen  and (max-width: 400px){
    img {
      width: 150px;
    }
  }
`;
