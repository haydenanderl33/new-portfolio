import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 356px;
  width: 100%;
  background: #19323c;
`;
export const SkillsWrapperUl = styled.ul`
  background: #19323c;
  height: 100%;
  width: 100%;
  display: grid;
  list-style: none;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow-wrap: anywhere;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 0.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

export const SkillsListItem1 = styled.li`
color: #F8F7F9;
font-size: 16px;
&:hover {
    transition: all 0.4s ease-in-out;
    color: #f9627d;
    font-size: 24px;
    cursor: none;
  }


animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;

    @keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 15px); } 
    100%   { transform: translate(0, 0px); }

    }
`;
export const SkillsListItem2 = styled.li`
color: #F8F7F9;
font-size: 16px;
&:hover {
    transition: all 0.4s ease-in-out;
    color: #f9627d;
    font-size: 24px;
    cursor: none;
  }


animation-name: floatingg; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;

    @keyframes floatingg { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, -15px); } 
    100%   { transform: translate(0, 0px); }

  }
`;


