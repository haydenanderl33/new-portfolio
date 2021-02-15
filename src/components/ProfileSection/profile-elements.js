import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 426px;
  width: 100%;
  background: #19323c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 576px;
  }
`;
export const ImageWrapper = styled.div`
  background: #19323c;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 24px;
  width: 40%;
  height: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`;
export const ProfileImg = styled.img`
  height: 250px;
  width: 250px;
  padding: 16px 24px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 200px;
  width: 200px;
  padding: 16px 24px;
  }
`;
export const ProfileInfo = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: #19323c;
  height: 100%;
  width: 60%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
export const ProfileH1 = styled.h1`
  color: #f8f7f9;
  font-size: 24px;
  margin-bottom: 48px;
`;
export const ProfileAbout = styled.p`
  color: #f8f7f9;
  max-width:480px;
`;
