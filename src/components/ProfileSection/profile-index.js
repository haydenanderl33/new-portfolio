import React from "react";
import {
  ProfileContainer,
  ImageWrapper,
  ProfileImg,
  ProfileInfo,
  ProfileH1,
  ProfileAbout
} from "./profile-elements";
import profileImg from '../../images/haydenprofilepic.webp'

const Profile = ({about}) => {
  return (
    <ProfileContainer id='about'>
      <ImageWrapper>
        <ProfileImg src={profileImg} alt='Hayden Anderl'/>
      </ImageWrapper>
      <ProfileInfo>
          <ProfileH1>About Me</ProfileH1>
          <ProfileAbout>{about}</ProfileAbout>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
