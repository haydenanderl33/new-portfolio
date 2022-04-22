import styled from "styled-components";

export const ResumeContainer = styled.div`
 height: 108px;
  width: 100%;
  background: #7a82ab;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: 4px;
  border-style: solid;
  border-color: #92DCE5;

`
export const ResumeLink = styled.a`
  color: #f8f7f9;
  font-size: 20px;
  font-weight: bold;
  /* margin-bottom: 16px; */
  /* border: #f8f7f9 solid; */
  text-decoration: none ;
  

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #f9627d;
  }
`