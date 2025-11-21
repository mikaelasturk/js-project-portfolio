import { SectionTitle } from "../Typography/SectionTitle.jsx"
import { ProjectCard } from "../Cards/ProjectCard.jsx"
// import projects from "../../data/projects.json"

export const ProjectSection = () => {
  return (
    <>
      <SectionTitle sectionTitle="Featured projects" />
      <ProjectCard />
    </>
  )
}
