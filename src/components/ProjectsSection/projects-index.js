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
import hanaleiSunset from "../../images/hanaleiSunset.webp";
import kauaiBeach from "../../images/kauaiBeach.webp";
import waves from "../../images/waves.webp";
import duskKauai from "../../images/duskKauai.webp";
import muscleMemoryPreview from "../../images/muscleMemoryPreview.webp";
import instagramPreview from "../../images/instagramPreview.webp";
import vanillaJsTodoPreview from "../../images/vanillaJsTodoPreview.webp";
import reactJsToDoPreview from "../../images/reactJsToDoPreview.webp";
import wordskiPreview from "../../images/wordskiPreview.webp";
import stairwayToHeaven from '../../images/stairwayToHeaven.webp'

import { FaNodeJs } from "react-icons/fa";

import {
  SiReact,
  SiRedux,
  SiPostgresql,
  SiStripe,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = ({
  projectDescription1,
  projectLink1,
  projectDescription2,
  projectLink2,
  projectDescription3,
  projectLink3,
  projectDescription4,
  projectLink4,
  projectDescription5,
  projectLink5,
}) => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image style={{objectPosition: 'center'}} src={stairwayToHeaven} alt="stairwayToHeaven" />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
            <ProjectDescription>{projectDescription5}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiReact />
              <SiCss3 />
              <SiFirebase />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink5}>
              <ProjectImage src={wordskiPreview} alt="wordskiPreview" />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink5}>{projectLink5}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer id="projects">
        <ProjectImageBackground>
          <Image src={hanaleiSunset} alt="hanaleiSunset" />
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
              <FaNodeJs />
              <SiPostgresql />
              <SiStripe />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink1}>
              <ProjectImage
                src={muscleMemoryPreview}
                alt="muscleMemoryPreview"
              />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink1}>{projectLink1}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={kauaiBeach} alt="kauaiBeach" />
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
              <SiFirebase />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink2}>
              <ProjectImage src={instagramPreview} alt="instagramPreview" />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink2}>{projectLink2}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={waves} alt="waves" />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
            <ProjectDescription>{projectDescription3}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiReact />
              <SiCss3 />
              <SiJavascript />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink3}>
              <ProjectImage src={reactJsToDoPreview} alt="reactJsToDoPreview" />
            </ProjectImageWrapper>
            <ProjectLinkContainer>
              <ProjectLink href={projectLink3}>{projectLink3}</ProjectLink>
            </ProjectLinkContainer>
          </ProjectPreviewAndLinkContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
      <ProjectsContainer>
        <ProjectImageBackground>
          <Image src={duskKauai} alt="duskKauai" />
        </ProjectImageBackground>
        <ProjectsWrapper>
          <ProjectDescriptionContainer>
            <ProjectDescription>{projectDescription4}</ProjectDescription>
            <BuiltWithContainer>
              <BuiltWith>Built with:</BuiltWith>
            </BuiltWithContainer>
            <IconsWrapper>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </IconsWrapper>
          </ProjectDescriptionContainer>
          <ProjectPreviewAndLinkContainer>
            <ProjectImageWrapper href={projectLink4}>
              <ProjectImage
                src={vanillaJsTodoPreview}
                alt="vanillaJsTodoPreview"
              />
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
