import React from 'react'
import { SkillsContainer, SkillsWrapperUl, SkillsListItem1, SkillsListItem2} from './skills-elements'

const Skills = ( {skill1, skill2, skill3, skill4,skill5,skill6, skill7,skill8, skill9, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18} ) => {
    return (
        <SkillsContainer id='skills'>
            <SkillsWrapperUl>
                <SkillsListItem1>{skill1}</SkillsListItem1>
                <SkillsListItem2>{skill2}</SkillsListItem2>
                <SkillsListItem1>{skill3}</SkillsListItem1>
                <SkillsListItem2>{skill4}</SkillsListItem2>
                <SkillsListItem1>{skill5}</SkillsListItem1>
                <SkillsListItem2>{skill6}</SkillsListItem2>
                <SkillsListItem1>{skill7}</SkillsListItem1>
                <SkillsListItem2>{skill8}</SkillsListItem2>
                <SkillsListItem1>{skill9}</SkillsListItem1>
                <SkillsListItem2>{skill10}</SkillsListItem2>
                <SkillsListItem1>{skill11}</SkillsListItem1>
                <SkillsListItem2>{skill12}</SkillsListItem2>
                <SkillsListItem1>{skill13}</SkillsListItem1>
                <SkillsListItem2>{skill14}</SkillsListItem2>
                <SkillsListItem1>{skill15}</SkillsListItem1>
                <SkillsListItem2>{skill16}</SkillsListItem2>
                <SkillsListItem1>{skill17}</SkillsListItem1>
                <SkillsListItem2>{skill18}</SkillsListItem2>
            </SkillsWrapperUl>
            
        </SkillsContainer>
    )
}

export default Skills
