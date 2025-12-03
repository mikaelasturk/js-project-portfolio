import { SectionTitle } from "../typography/typography"
import { ProjectCard } from "../cards/cards"
import projects from "../../data/projects"
import { StyledSection } from '../../styles/StyledSection'

export const ProjectSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} gap="56px">
      <SectionTitle title="Featured projects" variant={variant} textAlign="left"/>
      
      {projects.projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </StyledSection>
  )
}