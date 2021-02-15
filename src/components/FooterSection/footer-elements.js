import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.div`
  height: 220px;
  width: 100%;
`;
export const FooterItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #19323c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Name = styled(LinkScroll)`
  color: #f8f7f9;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #92dce5;
  }
`;
export const YearRightsWrapper = styled.div`
  height: 40px;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #f8f7f9;
  font-size: 24px;
  margin-bottom: 16px;
`;
export const Year = styled.h3`
  color: #f8f7f9;
  font-size: 16px;
`;
export const Rights = styled.h3`
  color: #f8f7f9;
  font-size: 24px;
`;
export const SocialLinksWrapper = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SocialLink = styled.a`
  color: #f8f7f9;
  font-size: 24px;

  &:hover {
    color: #92dce5;
    transition: all 0.3s ease-in-out;
  }
`;
