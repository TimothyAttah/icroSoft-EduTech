import styled from "styled-components";

export const PartnerContainer = styled.div`
  text-align: center;
  margin-top: 100px;

  h4 {
    font-size: 1.2rem;
    text-transform: capitalize;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 620px) {
    margin-top: 60px;
    width: 100%;

    h4 {
      font-size: 1.1rem;

    }
  }
`;
export const PartnerLogoContainer = styled.div`
  margin: 20px 0;
`;
export const PartnerLogo = styled.div`
  width: 150px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }

  @media screen and (max-width: 920px) {
    width: 100px !important;
  }

  @media screen and (max-width: 620px) {
    width: 50px !important;
  }

  @media screen and (max-width: 420px) {
    width: 35px !important;
  }
`;
