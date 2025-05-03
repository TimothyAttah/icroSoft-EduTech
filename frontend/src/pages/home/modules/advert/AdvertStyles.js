import styled from 'styled-components';

export const HomeCourseInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 20px;

  @media screen and (max-width: 560px) {
   margin-top: 10px;
   gap:10px;
  }
`;

export const HomeCourseInfoTitleBox = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;

  h2 {
    text-transform: uppercase;
    line-height: 40px;
    padding: 20px 0;
  }

  video {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    padding: 0 10px;
    h2 {
      font-size: 1.1rem;
      line-height: 22px;
      padding: 20px 0;
    }
  }
`;

export const HomeCourseInfoBox = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 50px;

  div:first-child {
    width: 100px;
    height: 120px;
    margin: auto;

    img {
      width: 100%;
    }
  }

  div:last-child {
    text-align: center;
    padding: 10px;
    h4 {
      color: orange;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #444;

      span {
        color: orange;
        font-weight: bold;
      }

      .bold {
        color: #444;
      }
    }
  }

  @media screen and (max-width: 760px) {
    margin-top: 20px;
    height: 250px;
    div:first-child {
      width: 80px;
      height: 80px;
      margin: auto;

      img {
        width: 100%;
      }
    }
  }
`;
