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
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const ProjectColumnsContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ titleFirst }) =>
    titleFirst ? `'col1 col2'` : `'col2 col1'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const ProjectName = styled.a`
  color: #150578;
  font-size: 24px;
  font-weight: bold;
  grid-area: col1;
  padding: 0 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
    font-size: 18px;
    overflow-wrap: break-word;
  }

  &:hover {
    color: #F8F7F9;
    transition: 0.5 ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectDescription = styled.div`
  color: #000000;
  font-weight: bold;
  grid-area: col2;
  padding: 0 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
    color: #F8F7F9;
  }
`;
