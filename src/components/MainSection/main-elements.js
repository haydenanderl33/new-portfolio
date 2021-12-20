import styled from 'styled-components'

export const MainContainer = styled.div`
    background: #19323C;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1100px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        height: 760px;
  }
`
export const MainBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: zero;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: linear-gradient(
    108deg,
    rgba(122, 130, 171, 1) 0%,
    rgba(249, 98, 125, 1) 100%
  );

`
export const MainContent = styled.div`
    z-index: 3;
    max-width:1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items:center;
`
export const MainH1 = styled.h1`
    color: #F8F7F9;
    font-size: 48px;
    text-align: center;
`
export const MainP = styled.p`
    margin-top: 24px;
    color: #19323C;
    font-size: 24px;
    font-weight: bold;
    max-width: 600px;
    @media screen and (max-width: 575px) {
        font-size: 16px;
  }
    @media screen and (max-width: 280px) {
        font-size: 16px;
  }

`
export const MainIconWrap  = styled.p`
    margin-top: 24px;
    max-width: 600px;
    display: flex;
    align-items:center;

`
export const SocialMediaIconLink = styled.a`
    color: #7A82AB;
    font-size: 36px;
    padding: 16px;

    &:hover {
        color: #F8F7F9;
        transition: all 0.3s ease-in-out;
    }
    
`
