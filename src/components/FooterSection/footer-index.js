import React from 'react'
import { FooterContainer, FooterItemsWrapper, Name, Rights, SocialLinksWrapper, SocialLink} from './footer-elements'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const Footer = ({ name, linkedin, github, instagram }) => {
    return (
        <FooterContainer>
            <FooterItemsWrapper>
                <Name>{name}</Name>
                <Rights>©</Rights>
                <SocialLinksWrapper>
                    <SocialLink href={linkedin}>
                        <FaLinkedin/>
                    </SocialLink>
                    <SocialLink href={github}>
                        <AiFillGithub />
                    </SocialLink>
                    <SocialLink href={instagram}>
                        <FaInstagram/>
                    </SocialLink>
                </SocialLinksWrapper>
            </FooterItemsWrapper>
        </FooterContainer>
    )
}

export default Footer
