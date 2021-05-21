import React from 'react'
import { SkillsContainer, SkillsWrapperUl, SkillsListItem1, SkillsListItem2, Logo} from './skills-elements'
import { DiReact } from 'react-icons/di'
import {SiNodeDotJs, SiRedux, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiPostman, SiHeroku, SiNginx, SiDigitalocean, SiStripe, SiStyledComponents, SiGithub } from 'react-icons/si'

const Skills = ( {skill1, skill2, skill3, skill4,skill5,skill6, skill7,skill8, skill9, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18} ) => {
    return (
        <SkillsContainer id='skills'>
            <SkillsWrapperUl>
                <SkillsListItem1><Logo><DiReact/></Logo>{skill1}</SkillsListItem1>
                <SkillsListItem2><Logo><SiNodeDotJs/></Logo>{skill2}</SkillsListItem2>
                <SkillsListItem1><Logo><SiRedux/></Logo>{skill3}</SkillsListItem1>
                <SkillsListItem2>{skill4}</SkillsListItem2>
                <SkillsListItem1><Logo><SiPostgresql/></Logo>{skill5}</SkillsListItem1>
                <SkillsListItem2>{skill6}</SkillsListItem2>
                <SkillsListItem1>{skill7}</SkillsListItem1>
                <SkillsListItem2><Logo><SiHtml5/></Logo>{skill8}</SkillsListItem2>
                <SkillsListItem1><Logo><SiCss3/></Logo>{skill9}</SkillsListItem1>
                <SkillsListItem2><Logo><SiJavascript/></Logo>{skill10}</SkillsListItem2>
                <SkillsListItem1><Logo><SiPostman/></Logo>{skill11}</SkillsListItem1>
                <SkillsListItem2><Logo><SiHeroku/></Logo>{skill12}</SkillsListItem2>
                <SkillsListItem1><Logo><SiNginx/></Logo>{skill13}</SkillsListItem1>
                <SkillsListItem2><Logo><SiDigitalocean/></Logo>{skill14}</SkillsListItem2>
                <SkillsListItem1>{skill15}</SkillsListItem1>
                <SkillsListItem2><Logo><SiStripe/></Logo>{skill16}</SkillsListItem2>
                <SkillsListItem1><Logo><SiStyledComponents/></Logo>{skill17}</SkillsListItem1>
                <SkillsListItem2><Logo><SiGithub/></Logo>{skill18}</SkillsListItem2>
            </SkillsWrapperUl>
            
        </SkillsContainer>
    )
}

export default Skills
