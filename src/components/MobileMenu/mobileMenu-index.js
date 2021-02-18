import React from "react";
import {
  MobileMenuContainer,
  Icon,
  CloseIcon,
  MobileMenuWrapper,
  MobileMenu,
  MobileMenuLink,
  MobileMenuBtnWrap,
  MobileMenuRoute,
} from "./mobileMenu-elements";

const MobileMenuPage = ({toggle, isOpen}) => {
  return (
    <>
      <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <MobileMenuWrapper>
          <MobileMenu>
            <MobileMenuLink to="about" smooth={true} duration={750} spy={true} exact={'true'} onClick={toggle} >About</MobileMenuLink>
            <MobileMenuLink to="resume" smooth={true} duration={750} spy={true} exact={'true'} onClick={toggle} >Resume</MobileMenuLink>
            <MobileMenuLink to="skills" smooth={true} duration={750} spy={true} exact={'true'} onClick={toggle} >Skills</MobileMenuLink>
            <MobileMenuLink to="projects" smooth={true} duration={750} spy={true} exact={'true'} onClick={toggle} >Projects</MobileMenuLink>
          </MobileMenu>
        <MobileMenuBtnWrap>
          <MobileMenuRoute to="/contact">Contact</MobileMenuRoute>
        </MobileMenuBtnWrap>
        </MobileMenuWrapper>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenuPage;
