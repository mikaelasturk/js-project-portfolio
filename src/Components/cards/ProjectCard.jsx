import { CardImage, Tag, Button, SvgIcon} from "../ui/ui"
import { CardTitle, BodyText } from "../typography/typography"
import { GlobeIcon, GithubIcon } from "../svg-icons/svg-icons"

export const ProjectCard = ({ project }) => {
  return (
    <>
      <CardImage src={project.image} alt={project.alt}v/>
      <CardTitle title={project.name} />
      <BodyText text={project.description} />

      {project.tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}

      <Button href={project.netlify} text= "Live demo">
        <SvgIcon icon={<GlobeIcon />} />
      </Button>
      <Button href={project.github} text= "View the code">
        <SvgIcon icon={<GithubIcon />} />
      </Button>
    </>
  )
}