import { useEffect, useState } from "react";
import {
  SkillsContainer,
  SkillsWrapperUl,
  SkillsListItem1,
  SkillsListItem2,
  LogoAndText,
} from "./skills-elements";
import { DiReact } from "react-icons/di";
import {FaNodeJs} from 'react-icons/fa'
import {
  SiRedux,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostman,
  SiHeroku,
  SiNginx,
  SiDigitalocean,
  SiStripe,
  // SiStyledComponents,
  SiGithub,
} from "react-icons/si";

const Skills = ({
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
  skill13,
  skill14,
  skill15,
  skill16,
  skill17,
  skill18,
}) => {
  const [LogoAndTextFontSize, setLogoAndTextFontSize] = useState("0");

  useEffect(() => {
    const setLogoAndTextSize = () => {
      window.outerWidth >= 768
        ? setLogoAndTextFontSize("36")
        : setLogoAndTextFontSize("20");
    };

    setLogoAndTextSize();
  }, [LogoAndTextFontSize]);

  // console.log('outer',window.outerWidth)
  // console.log('inner',window.innerWidth)

  return (
    <SkillsContainer id="skills">
      <SkillsWrapperUl>
        <SkillsListItem1>
          <LogoAndText>
            <DiReact
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill1}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <FaNodeJs
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill2}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            <SiRedux
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill3}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <DiReact
            style={{
              fontSize: `${LogoAndTextFontSize}px`,
              marginBottom: "4px",
              display: "none",
            }}
          />
          {skill4}
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            <SiPostgresql
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill5}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <DiReact
            style={{
              fontSize: `${LogoAndTextFontSize}px`,
              marginBottom: "4px",
              display: "none",
            }}
          />
          {skill6}
        </SkillsListItem2>
        <SkillsListItem1>
          <DiReact
            style={{
              fontSize: `${LogoAndTextFontSize}px`,
              marginBottom: "4px",
              display: "none",
            }}
          />
          {skill7}
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiHtml5
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill8}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            <SiCss3
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill9}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiJavascript
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill10}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            <SiPostman
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill11}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiHeroku
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill12}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            <SiNginx
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill13}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiDigitalocean
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill14}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <DiReact
            style={{
              fontSize: `${LogoAndTextFontSize}px`,
              marginBottom: "4px",
              display: "none",
            }}
          />
          {skill15}
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiStripe
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill16}
          </LogoAndText>
        </SkillsListItem2>
        <SkillsListItem1>
          <LogoAndText>
            {/* <SiStyledComponents
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            /> */}
            {skill17}
          </LogoAndText>
        </SkillsListItem1>
        <SkillsListItem2>
          <LogoAndText>
            <SiGithub
              style={{
                fontSize: `${LogoAndTextFontSize}px`,
                marginBottom: "4px",
              }}
            />
            {skill18}
          </LogoAndText>
        </SkillsListItem2>
      </SkillsWrapperUl>
    </SkillsContainer>
  );
};

export default Skills;
