import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #19323c;
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#19323C")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;

  /* @media screen and (max-width: 768px) {
    background: #19323C;
  } */
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
`;
// export const NavLogo = styled(LinkRoute)`
//   color: ${({ scrollNav }) => (scrollNav ? "transparent" : "#F8F7F9" )};
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     color: #92dce5;
//   }
// `;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #f8f7f9;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      color: #92dce5;
    }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  color: #f8f7f9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 24px;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #f9627d;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #92dce5;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRoute)`
  border-radius: 50px;
  color: #f8f7f9;
  background: #7a82ab;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f9627d;
    color: #19323c;
  }
`;
export const NavLogo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLogoLink = styled(LinkScroll)`
  border-radius: 50px;
  color: #f8f7f9;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f9627d;
    color: #19323c;
  }
`;
