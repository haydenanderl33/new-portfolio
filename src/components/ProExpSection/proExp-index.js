import React from "react";
import {
  ProExpContainer,
  ProExpInfoWrapper,
  ProExpDescriptionWrapper,
  ProExpNameH3,
  ProExpInfoContainer,
  ProExpDescriptionContainer,
  ProExpDescriptionPositionH3,
  ProExpDescriptionDate,
  ProExpDescriptionBulletWrapper,
  ProExpDescriptionBullet,
} from "./proExp-elements";

const ProExp = ({
  company,
  position,
  startMonth,
  startYear,
  endMonth,
  endYear,
  exp1,
  exp2,
  exp3,
}) => {
  return (
    <ProExpContainer id="resume">
      <ProExpInfoContainer>
        <ProExpInfoWrapper>
          <ProExpNameH3>{company}</ProExpNameH3>
        </ProExpInfoWrapper>
      </ProExpInfoContainer>
      <ProExpDescriptionContainer>
        <ProExpDescriptionWrapper>
          <ProExpDescriptionPositionH3>{position}</ProExpDescriptionPositionH3>
          <ProExpDescriptionDate>
            {startMonth} {startYear} - {endMonth} {endYear}{" "}
          </ProExpDescriptionDate>
          <ProExpDescriptionBulletWrapper>
            <ProExpDescriptionBullet>{exp1}</ProExpDescriptionBullet>
            <ProExpDescriptionBullet> {exp2} </ProExpDescriptionBullet>
            <ProExpDescriptionBullet> {exp3} </ProExpDescriptionBullet>
          </ProExpDescriptionBulletWrapper>
        </ProExpDescriptionWrapper>
      </ProExpDescriptionContainer>
    </ProExpContainer>
  );
};

export default ProExp;
