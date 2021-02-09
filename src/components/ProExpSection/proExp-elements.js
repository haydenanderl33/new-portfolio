import styled from "styled-components";

export const ProExpContainer = styled.div`
  height: 356px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: 4px;
  border-style: solid;
  border-color: #92DCE5;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 500px;
    padding: 0 16px;
    background: #7a82ab;
  }
`;

export const ProExpInfoContainer = styled.div`
  height: 100%;
  width: 40%;
  background: #7a82ab;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 78px;
  
  
  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
    justify-content: center;
  }
`;
export const ProExpInfoWrapper = styled.div`
  background: #7a82ab;
  height: 25%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 100%;
  border-bottom-width: 6px;
  border-bottom-style: solid;
  border-bottom-color: #f8f7f9;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const ProExpNameH3 = styled.h3`
  color: #f8f7f9;
  font-size: 32px;
  max-width: 100%;
  align-items: center;
`;
export const ProExpDescriptionContainer = styled.div`
  height: 100%;
  width: 60%;
  background: #7a82ab;
  display: flex;
  align-items: center;
  padding: 0 78px;

  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
    padding: 54px 0 0 0; 
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ProExpDescriptionWrapper = styled.div`
  color: #f8f7f9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ProExpDescriptionPositionH3 = styled.h3`
  font-size: 24px;
  margin-bottom: 24px;
`;
export const ProExpDescriptionDate = styled.div`
  font-size: 20px;
  font-family: "Encode Sans Condensed", sans-serif;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 36px;
  }
`;
export const ProExpDescriptionBulletWrapper = styled.ul`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-left: 48px;
  list-style: circle;

  @media screen and (max-width: 768px) {
    margin-left: 48px;
    width:80%;
  }
`;
export const ProExpDescriptionBullet = styled.li`
`;
