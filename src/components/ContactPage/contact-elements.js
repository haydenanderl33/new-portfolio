import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const ContactPage = styled.div`

  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(122, 130, 171, 1) 0%,
    rgba(249, 98, 125, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5 all ease-in-out;
`;
export const ContactBoxContainer = styled.div`
  height: 440px;
  width: 350px;
  border-radius: 25px;
  background: #19323c;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 280px) {
    height: 500px;
    width: 80%;
  }
`;
export const ContactH1Wrapper = styled.div`
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  margin-bottom: 64px;
`;
export const ContactH1 = styled.h1`
  color: #f8f7f9;
  font-size: 20px;
`;
export const ContactLinksWrapper = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  `;
export const ContactLink = styled.a`
  color: #7a82ab;
  padding: 16px 16px;
  margin-bottom: 24px;
  @media screen and (max-width: 280px) {
    padding: 16px 16px;
    height: 100px;
    width: 180px;
    overflow-wrap: anywhere;

  }

  &:hover {
      transition: all 0.2s ease-in-out;
      color: #92dce5;
      cursor: pointer;
    }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const BtnRoute = styled(LinkRoute)`
  color: #F8F7F9;
  margin-top: 36px;
  background: #7A82AB;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 280px) {
    padding: 16px 24px;
    margin-top: 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f9627d;
    color: #19323c;
  }
`;