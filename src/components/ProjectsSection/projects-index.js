import React from "react";
import {
  ProjectsContainer,
  ProjectImageBackground,
  Image,
  ProjectsWrapper,
  BuiltWith,
  BuiltWithContainer,
  ProjectDescriptionContainer,
  ProjectDescription,
  IconsWrapper,
  ProjectPreviewAndLinkContainer,
  ProjectImage,
  ProjectImageWrapper,
  ProjectLinkContainer,
  ProjectLink,
} from "./projects-elements";
import hanaleiSunset from "../../images/hanaleiSunset.jpg";
import kauaiBeach from "../../images/kauaiBeach.jpg";
import waves from "../../images/waves.jpg";
// import napaliAerial from "../../images/napaliaerial.jpg";
import duskKauai from "../../images/duskKauai.jpg";
import muscleMemoryPreview from "../../images/muscleMemoryPreview.jpg";
import instagramPreview from '../../images/instagramPreview.jpg'
import vanillaJsTodoPreview from '../../images/vanillaJsTodoPreview.jpg'
import reactJsToDoPreview from '../../images/reactJsToDoPreview.jpg'

import {
  SiReact,
  SiRedux,
  SiPostgresql,
  SiNodeDotJs,
  SiStripe,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";

const Projects = ({
projectDescription1,
projectLink1,
projectDescription2,
projectLink2,
projectDescription3,
projectLink3,
projectDescription4,
projectLink4

}) => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image src={hanaleiSunset} />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
              <ProjectDescription>{projectDescription1}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiReact />
              <SiRedux />
              <SiNodeDotJs />
              <SiPostgresql />
              <SiStripe />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink1}>
              <ProjectImage src={muscleMemoryPreview} />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink1}>{projectLink1}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={kauaiBeach} />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
              <ProjectDescription>{projectDescription2}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiReact />
              <SiTailwindcss />
              <SiFirebase/>
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink2}>
              <ProjectImage src={instagramPreview} />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink2}>{projectLink2}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={waves} />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
              <ProjectDescription>{projectDescription3}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiReact/>
              <SiCss3 />
              <SiJavascript/>
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink3}>
              <ProjectImage src={reactJsToDoPreview} />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink3}>{projectLink3}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={duskKauai} />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
              <ProjectDescription>{projectDescription4}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiHtml5/>
              <SiCss3 />
              <SiJavascript/>
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink4}>
              <ProjectImage src={vanillaJsTodoPreview} />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink4}>{projectLink4}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

// <ProjectsWrapper titleFirst={titleFirst1}>
//           <ProjectNameContainer titleFirst={titleFirst1}>
//             <ProjectName lightText={lightTextName1} href={projectLink1}>{projectLink1}</ProjectName>
//           </ProjectNameContainer>
//           <ProjectDescriptionContainer titleFirst={titleFirst1}>
//             <ProjectDescription lightText={lightTextDescription1}>{projectDescription1}</ProjectDescription>
//           </ProjectDescriptionContainer>
//         </ProjectsWrapper>
