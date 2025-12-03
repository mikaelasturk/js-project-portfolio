import styled from "styled-components"
import { SectionTitle, BodyText } from "../typography/typography"
import aboutMe from "../../data/aboutMe"
import { StyledSection } from '../../styles/StyledSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 110px;
    align-items: center; 
    justify-content: center;
  }
`


export const TechSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} paddingTablet="260px 180px"
    paddingDesktop="380px 140px" 
    paddingDesktopL="380px 230px">
      <Container>
        <SectionTitle title="Tech" variant={variant} 
        marginBottom="0"/>
        <BodyText text={aboutMe.techStack} weight="lightsemibold" fontSizeT="tablet" fontSizeD="desktop" textAlign="center" />
      </Container>
    </StyledSection>
  )
}