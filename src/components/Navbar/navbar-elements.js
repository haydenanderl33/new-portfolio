import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #19323c;
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#19323C" )};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    background: #19323C;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkRoute)`
  color: #f8f7f9;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #92dce5;
  }
`;
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
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

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
  padding: 0 1rem;
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
  align-items: center;

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
