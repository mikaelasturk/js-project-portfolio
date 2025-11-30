import { SectionTitle } from "../typography/SectionTitle"
import { CardTitle } from "../typography/CardTitle"
import aboutMe from "../../data/aboutMe"
import { StyledSection } from '../../styles/StyledSection'


export const TechSection = ({ variant }) => {
  return (
    <StyledSection variant={variant}>
      <SectionTitle title="Tech Stack" variant={variant}/>
      <CardTitle title={aboutMe.techStack}/>
    </StyledSection>
  )
}