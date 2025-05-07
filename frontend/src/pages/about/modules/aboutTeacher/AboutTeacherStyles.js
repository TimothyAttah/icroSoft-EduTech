import styled from "styled-components";

export const AboutTeacherContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const AboutTeacherTitle = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  font-size: 45px;
`;
export const AboutTeacherLists = styled.div`
  /* width: 90%; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0px auto;
  justify-content: space-around;
`;
export const AboutTeacherListItem = styled.div`
  width: 400px;
  padding-bottom: 20px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  margin: auto;

  @media screen  and (max-width: 420px){
    width: 100%;
  }
`;
export const AboutTeacherListItemPic = styled.div`
  /* height: 300px; */
  width: 100%;

  img {
    width: 100%;
  }
`;
export const AboutTeacherListItemDetails = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  h4 {
    font-size: 26px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: rgb(108, 106, 116);
    margin-top: 1px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    svg {
      font-size: 17px;
      color: rgb(255, 102, 0);
    }
  }
`;



// export const AboutTeacherContainer = styled.div``;
