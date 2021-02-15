import React from "react";
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {
  MainContainer,
  MainBackground,
  VideoBackground,
  MainContent,
  MainH1,
  MainP,
  MainIconWrap,
  SocialMediaIconLink,
} from "./main-elements";
import Video from "../videos/video-4.mp4";

const Main = ({ name, title, linkedin, github, instagram }) => {
  return (
    <MainContainer id="home">
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </MainBackground>
      <MainContent>
        <MainH1>{name}</MainH1>
        <MainP>{title}</MainP>
        <MainIconWrap>
            <SocialMediaIconLink href={linkedin}>
                <FaLinkedin/>
            </SocialMediaIconLink>
            <SocialMediaIconLink href={github}>
                <AiFillGithub />
            </SocialMediaIconLink>
            <SocialMediaIconLink href={instagram}>
                <FaInstagram/>
            </SocialMediaIconLink>
        </MainIconWrap>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
