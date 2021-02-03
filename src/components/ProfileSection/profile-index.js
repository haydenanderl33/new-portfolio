import React from "react";
import {
  ProfileContainer,
  ImageWrapper,
  ProfileImg,
  ProfileInfo,
  ProfileH1,
  ProfileAbout
} from "./profile-elements";
import profileImg from '../myImages/haydenprofilepic.jpg'

const Profile = ({about}) => {
  return (
    <ProfileContainer>
      <ImageWrapper>
        <ProfileImg src={profileImg} alt='Profile Picture'/>
      </ImageWrapper>
      <ProfileInfo>
          <ProfileH1>About Me</ProfileH1>
          <ProfileAbout>{about}</ProfileAbout>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
