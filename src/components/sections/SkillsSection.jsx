import styled from 'styled-components'
import { SectionTitle } from "../typography/typography"
import { SkillColumn } from "../cards/cards"
import skills from "../../data/skills"
import { StyledSection } from '../../styles/StyledSection'

const StyledSkillsSection = styled.div`
  
`
 

export const SkillsSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} gap="56px" padding="120px 16px">
      <SectionTitle title="Skills" variant={variant} />
      {skills.skillsList.map((skill, index) => (
        <SkillColumn 
        key={index} 
        colIndex={index}
        skillsList={skill}/>
      ))}
    </StyledSection>
  )
}