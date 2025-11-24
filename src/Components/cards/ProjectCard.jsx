import { CardImage, Tag, Button } from "../ui/ui"
import { CardTitle, BodyText } from "../typography/typography"
import { GlobeIcon, GithubIcon } from "../svg-icons/svg-icons"

export const ProjectCard = ({ project }) => {
  return (
    <>
      <CardImage 
        src={project.image} 
        alt={project.alt} 
      />
      
      <CardTitle 
        title={project.name} 
      />

      <BodyText 
        text={project.description}
      />
      {project.tags.map(tag => (
        <Tag 
        key={tag} 
        tag={tag} />
      ))}
      <Button 
      href={project.netlify} 
      text= "Live demo"
      >
        <GlobeIcon />
      </Button>

      <Button 
      href={project.github} 
      text= "View the code"
      >
        <GithubIcon />
      </Button>
    </>
  )
}