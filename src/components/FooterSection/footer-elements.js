import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 220px;
    width: 100%;
`
export const FooterItemsWrapper = styled.div`
height: 100%;
width: 100%;
background: #19323C;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Name = styled.h3`
    color: #F8F7F9;
    font-size: 24px;
    margin-bottom: 16px;
`
export const Rights = styled.h3`
color: #F8F7F9;
font-size: 24px;
margin-bottom: 16px;
`
export const SocialLinksWrapper = styled.div`
height: 30px;
width: 100px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`
export const SocialLink = styled.a`
color: #F8F7F9;
font-size: 24px;

&:hover {
        color: #92DCE5;
        transition: all 0.3s ease-in-out;
    }
`