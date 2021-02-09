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
            <MobileMenuLink to="about" onClick={props.toggle} >About</MobileMenuLink>
            <MobileMenuLink to="resume" onClick={props.toggle} >Resume</MobileMenuLink>
            <MobileMenuLink to="skills" onClick={props.toggle} >Skills</MobileMenuLink>
            <MobileMenuLink to="projects" onClick={props.toggle} >Projects</MobileMenuLink>
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
