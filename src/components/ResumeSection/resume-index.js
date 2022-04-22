import resumePDF from '../../../src/Hayden Anderl 2022 Resume.pdf'
import { ResumeLink } from './resume-elements'


import {ResumeContainer} from './resume-elements'

const Resume = () => {
    return(
        <ResumeContainer>
            <ResumeLink href={resumePDF}>Download Resume</ResumeLink>
            </ResumeContainer>
    )
}

export default Resume