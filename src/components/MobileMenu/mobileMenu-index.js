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

const MobileMenuPage = (props) => {
  return (
    <>
      <MobileMenuContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <MobileMenuWrapper>
          <MobileMenu>
            <MobileMenuLink to="about">About</MobileMenuLink>
            <MobileMenuLink to="resume">Resume</MobileMenuLink>
            <MobileMenuLink to="skills">Skills</MobileMenuLink>
            <MobileMenuLink to="projects">Projects</MobileMenuLink>
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
