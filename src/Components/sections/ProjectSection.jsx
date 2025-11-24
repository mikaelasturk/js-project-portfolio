import { SectionTitle } from "../typography/typography"
import { ProjectCard } from "../cards/cards"
import projects from "../../data/projects"

export const ProjectSection = () => {
  return (
    <>
      <SectionTitle title="Featured projects" />
      
      {projects.projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </>
  )
}