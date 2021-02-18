import React from "react";
import {
  ProjectsContainer,
  ProjectImageBackground,
  Image,
  ProjectsWrapper,
  ProjectName,
  ProjectNameContainer,
  ProjectDescriptionContainer,
  ProjectDescription,
} from "./projects-elements";
import hanaleiSunset from "../../images/hanaleiSunset.jpg";
import kauaiBeach from "../../images/kauaiBeach.jpg";
import waves from "../../images/waves.jpg";
const Projects = ({
  projectLink1,
  projectDescription1,
  titleFirst1,
  lightTextName1,
  lightTextDescription1,
  projectLink2,
  projectDescription2,
  titleFirst2,
  lightTextName2,
  lightTextDescription2,
  projectLink3,
  projectDescription3,
  titleFirst3,
  lightTextName3,
  lightTextDescription3,
}) => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image src={hanaleiSunset} />
        </ProjectImageBackground>
        <ProjectsWrapper titleFirst={titleFirst1}>
          <ProjectNameContainer titleFirst={titleFirst1}>
            <ProjectName lightText={lightTextName1} href={projectLink1}>{projectLink1}</ProjectName>
          </ProjectNameContainer>
          <ProjectDescriptionContainer titleFirst={titleFirst1}>
            <ProjectDescription lightText={lightTextDescription1}>{projectDescription1}</ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image src={kauaiBeach} />
        </ProjectImageBackground>
        <ProjectsWrapper titleFirst={titleFirst2}>
          <ProjectNameContainer titleFirst={titleFirst2}>
            <ProjectName lightText={lightTextName2}  href={projectLink2}>{projectLink2}</ProjectName>
          </ProjectNameContainer>
          <ProjectDescriptionContainer titleFirst={titleFirst2}>
            <ProjectDescription lightText={lightTextDescription2}>{projectDescription2}</ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image src={waves} />
        </ProjectImageBackground>
        <ProjectsWrapper titleFirst={titleFirst3}>
          <ProjectNameContainer titleFirst={titleFirst3}>
            <ProjectName lightText={lightTextName3} href={projectLink3}>{projectLink3}</ProjectName>
          </ProjectNameContainer>
          <ProjectDescriptionContainer titleFirst={titleFirst3}>
            <ProjectDescription lightText={lightTextDescription3}>{projectDescription3}</ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
