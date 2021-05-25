import {useEffect, useState} from 'react'
import { SkillsContainer, SkillsWrapperUl, SkillsListItem1, SkillsListItem2, Logo} from './skills-elements'
import { DiReact } from 'react-icons/di'
import {SiNodeDotJs, SiRedux, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiPostman, SiHeroku, SiNginx, SiDigitalocean, SiStripe, SiStyledComponents, SiGithub } from 'react-icons/si'





const Skills = ( {skill1, skill2, skill3, skill4,skill5,skill6, skill7,skill8, skill9, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18} ) => {

    const [logoFontSize, setLogoFontSize] = useState('0')

    useEffect(() => {
        const setLogoSize = () => {
            window.outerWidth <= 768 ? setLogoFontSize('20') : setLogoFontSize('36')
        }

        setLogoSize()
        
    },[logoFontSize])


    // console.log('outer',window.outerWidth)
    // console.log('inner',window.innerWidth)

    


    return (
        <SkillsContainer id='skills'>
            <SkillsWrapperUl>
                <SkillsListItem1><Logo><DiReact style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/>{skill1}</Logo></SkillsListItem1>
                <SkillsListItem2><Logo><SiNodeDotJs style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/>{skill2}</Logo></SkillsListItem2>
                <SkillsListItem1><Logo><SiRedux style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill3}</SkillsListItem1>
                <SkillsListItem2>{skill4}</SkillsListItem2>
                <SkillsListItem1><Logo><SiPostgresql style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill5}</SkillsListItem1>
                <SkillsListItem2>{skill6}</SkillsListItem2>
                <SkillsListItem1>{skill7}</SkillsListItem1>
                <SkillsListItem2><Logo><SiHtml5 style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill8}</SkillsListItem2>
                <SkillsListItem1><Logo><SiCss3 style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill9}</SkillsListItem1>
                <SkillsListItem2><Logo><SiJavascript style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill10}</SkillsListItem2>
                <SkillsListItem1><Logo><SiPostman style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill11}</SkillsListItem1>
                <SkillsListItem2><Logo><SiHeroku style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill12}</SkillsListItem2>
                <SkillsListItem1><Logo><SiNginx style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill13}</SkillsListItem1>
                <SkillsListItem2><Logo><SiDigitalocean style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill14}</SkillsListItem2>
                <SkillsListItem1>{skill15}</SkillsListItem1>
                <SkillsListItem2><Logo><SiStripe style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill16}</SkillsListItem2>
                <SkillsListItem1><Logo><SiStyledComponents style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill17}</SkillsListItem1>
                <SkillsListItem2><Logo><SiGithub style={{fontSize: `${logoFontSize}px`, marginBottom: '4px'}}/></Logo>{skill18}</SkillsListItem2>
            </SkillsWrapperUl>
        </SkillsContainer>
    )
}

export default Skills
