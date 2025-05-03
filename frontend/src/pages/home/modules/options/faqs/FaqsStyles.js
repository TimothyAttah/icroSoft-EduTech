import styled from "styled-components";

export const Faqs = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    color: #44425a;
  }
  .faq.active .answer {
    max-height: 300px;
    animation: fade 1s ease-in-out;
  }

  .faq.active svg {
    transform: rotate(180deg);
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const FaqContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 1.2rem;
  cursor: pointer;
`;



export const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #f2f1f8;
  padding-left: 24px;
  cursor: pointer;
  color: #44425a;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;

  h3 {
    font-size: 1rem;
  }

  div {
    width: 23px;
    height: 23px;
    background: #ff6600;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {

    font-size: 18px;
    transition: transform 0.5s ease-in;

  }
`;
export const FaqAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1.4s ease;
  padding: 0 15px;
  p {
    padding-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.4rem;
    color: #6c6a74;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`;
