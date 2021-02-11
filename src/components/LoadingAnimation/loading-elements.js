import styled from 'styled-components'

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #19323C;
`
export const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #19323C;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingCircle = styled.div`
border: 16px solid #f3f3f3; 
  border-top: 16px solid #F9627D;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } }
`