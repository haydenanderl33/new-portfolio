import React from "react";
import {
  FooterContainer,
  FooterItemsWrapper,
  Name,
  SocialLinksWrapper,
  SocialLink,
  YearRightsWrapper,
  Year,
} from "./footer-elements";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = ({ name, linkedin, github, instagram }) => {
  return (
    <FooterContainer>
      <FooterItemsWrapper>
        <Name to='home' smooth={true} duration={1000} spy={true} exact={'true'} >{name}</Name>
        <YearRightsWrapper>
          {/* <Rights>©</Rights> */}
          <Year>{new Date().getFullYear()}</Year>
        </YearRightsWrapper>
        <SocialLinksWrapper>
          <SocialLink href={linkedin}>
            <FaLinkedin />
          </SocialLink>
          <SocialLink href={github}>
            <AiFillGithub />
          </SocialLink>
          <SocialLink href={instagram}>
            <FaInstagram />
          </SocialLink>
        </SocialLinksWrapper>
      </FooterItemsWrapper>
    </FooterContainer>
  );
};

export default Footer;
