import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

export const MobileMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #7a82ab;
  display: grid;
  align-items: center;
  /* bottom: 0; */
  right: 0;
  justify-content: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(ImCancelCircle)`
  color: #f8f7f9;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f9627d;
  }
`;
export const MobileMenuWrapper = styled.div`
  color: #f8f7f9;
`;
export const MobileMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 80px);
  }
`;
export const MobileMenuLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #f8f7f9;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f9627d;
  }
`;
export const MobileMenuBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const MobileMenuRoute = styled(LinkRoute)`
  color: #f8f7f9;
  background: #19323c;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f9627d;
    color: #19323c;
  }
`;
