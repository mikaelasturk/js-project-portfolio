import styled from 'styled-components'
import { SectionTitle } from "../typography/typography"
import { SkillColumn } from "../cards/cards"
import skills from "../../data/skills"

const StyledSkillsSection = styled.div`
display: flex;


`

export const SkillsSection = () => {
  return (
    <>
      <SectionTitle title="Skills" />
            <StyledSkillsSection>
      {skills.skillsList.map((skill, index) => (
        <SkillColumn
          key={index}
          skillsList={skill}
        />
      ))}
      </StyledSkillsSection>
    </>
  )
}