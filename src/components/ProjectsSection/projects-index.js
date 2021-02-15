import React from "react";
import {
  ProjectsContainer,
  ProjectImageBackground,
  Image,
  ProjectsWrapper,
  ProjectName,
  ProjectColumnsContainer,
  ProjectDescription,
} from "./projects-elements";
import hanaleiSunset from "../../images/hanaleiSunset.jpg"
import kauaiBeach from "../../images/kauaiBeach.jpg"
import waves from "../../images/waves.jpg"
const Projects = ({projectLink1, projectDescription1, titleFirst1, projectLink2, projectDescription2, titleFirst2, projectLink3, projectDescription3, titleFirst3}) => {
  return (
    <>
    <ProjectsContainer id='projects' >
      <ProjectImageBackground>
        <Image src={hanaleiSunset}/>
      </ProjectImageBackground>
      <ProjectsWrapper>
        <ProjectColumnsContainer titleFirst={titleFirst1}>
          <ProjectName href={projectLink1}>{projectLink1}</ProjectName>
          <ProjectDescription>{projectDescription1}
          </ProjectDescription>
        </ProjectColumnsContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
    <ProjectsContainer>
      <ProjectImageBackground>
        <Image src={kauaiBeach}/>
      </ProjectImageBackground>
      <ProjectsWrapper>
        <ProjectColumnsContainer titleFirst={titleFirst2}>
          <ProjectName href={projectLink2}>{projectLink2}</ProjectName>
          <ProjectDescription>{projectDescription2}
          </ProjectDescription>
        </ProjectColumnsContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
    <ProjectsContainer>
      <ProjectImageBackground>
        <Image src={waves}/>
      </ProjectImageBackground>
      <ProjectsWrapper>
        <ProjectColumnsContainer titleFirst={titleFirst3}>
          <ProjectName href={projectLink3}>{projectLink3}</ProjectName>
          <ProjectDescription>{projectDescription3}
          </ProjectDescription>
        </ProjectColumnsContainer>
      </ProjectsWrapper>
    </ProjectsContainer>

    </>
  );
};

export default Projects;
