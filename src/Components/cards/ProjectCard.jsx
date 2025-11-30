import styled from "styled-components"
import { CardImage, Tag, Button, SvgIcon} from "../ui/ui"
import { CardTitle, BodyText } from "../typography/typography"
import { GlobeIcon, GithubIcon } from "../svg-icons/svg-icons"

const StyledProjectCard = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
`

export const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard>
      <CardImage src={project.image} alt={project.alt}/>
      <CardTitle title={project.name} />
      <BodyText text={project.description} />

      {project.tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}

      <Button href={project.netlify} text= "Live demo" variant="demo">
        <SvgIcon icon={<GlobeIcon />} />
      </Button>
      <Button href={project.github} text= "View the code" variant="code">
        <SvgIcon icon={<GithubIcon />} />
      </Button>
    </StyledProjectCard>
  )
}