import styled from "styled-components";


export const ProjectsContainer = styled.div`
  height: 400px;
  position: relative;
`;

export const ProjectImageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #7a82ab;
`;
export const ProjectsWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  color: #92dce5;

`;

export const ProjectDescriptionContainer = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: repeat(3, 1fr);

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const ProjectDescription = styled.p`
font-size: 16px;
overflow-wrap: anywhere;
`;

export const BuiltWithContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BuiltWith = styled.p`
  font-size: 16px;
`

export const IconsWrapper = styled.div`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ProjectPreviewAndLinkContainer = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: repeat(2, 1fr);
`
export const ProjectImageWrapper = styled.a`

width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  /* @media screen and (max-width: 768px) {
    width: 100%;
  height: 100%;
  } */
`
export const ProjectImage = styled.img`
object-fit: contain;
width: 50%;
height: 50%;
/* padding-top: 24px; */
border-radius: 5px;
`
export const ProjectLinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 24px; */
  /* padding: 0 16px; */
`
export const ProjectLink = styled.a`
font-size: 16px;
-ms-word-break: break-all;
     word-break: break-all;
color: inherit;

&:hover {
      transition: all 0.2s ease-in-out;
      color: #F9627D;
      cursor: pointer;
    }
`