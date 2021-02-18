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
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #7a82ab;
`;
export const ProjectsWrapper = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction:   ${({ titleFirst }) => (titleFirst ? `row` : `row-reverse`)};
  
  @media screen and (max-width: 768px) {
      flex-direction: column;
  }
`;
export const ProjectNameContainer = styled.div`
  height:100%;
  width:50%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: ${({ titleFirst }) => (titleFirst ? `flex-end` : `flex-start`)};

  @media screen and (max-width: 768px) {
      height: 50%;
      width: 100%;
      align-items: center;
  }
`;
export const ProjectName = styled.a`
  color: ${({ lightText }) => (lightText ? `#F8F7F9` : `#150578`)};
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 64px;
  

  @media screen and (max-width: 768px) {
    color: #92DCE5;
      height: 200px;
      width: 300px;
      font-size: 16px;
      align-items: center;
      overflow-wrap: anywhere;
      padding: 0 24px;
  }

  &:hover {
    color: ${({ lightText }) => (lightText ?  `#150578` : `#F8F7F9` )};
    transition: 0.5 ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectDescriptionContainer = styled.div`
    height:100%;
  width:50%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: ${({ titleFirst }) => (titleFirst ? `flex-start` : `flex-end`)};

  @media screen and (max-width: 768px) {
      height: 50%;
      width: 100%;
      align-items: center;
  }
`;
export const ProjectDescription = styled.div`
  color: ${({ lightText }) => (lightText ?  `#92DCE5` : `#000000` )};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 0 64px;
  height: 90px;
  width: 700px;

  @media screen and (max-width: 1370px){
    width: 400px;
  }
  @media screen and (max-width: 768px){
    color: #F8F7F9;
    font-size: 16px;
    padding: 0 24px;
    height: 200px;
      width: 300px;
  }


`;
