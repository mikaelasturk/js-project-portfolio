import styled from "styled-components"
import { SectionTitle, BodyText } from "../typography/typography"
import aboutMe from "../../data/aboutMe"
import { StyledSection } from '../../styles/StyledSection'

const StyledTechSection = styled.div`
  
`


export const TechSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} gap="56px" padding="120px 16px">
      <SectionTitle title="Tech" variant={variant}/>
      <BodyText text={aboutMe.techStack} weight="semibold" fontSize="xs"/>
    </StyledSection>
  )
}