import styled from "styled-components"
import { CardImage, Tag, Button, SvgIcon} from "../ui/ui"
import { CardTitle, BodyText } from "../typography/typography"
import { GlobeIcon, GithubIcon } from "../svg-icons/svg-icons"
import { FlexWrapper } from "../../styles/styles"

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px; 
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard>
      <CardImage src={project.image} alt={project.alt}/>
      <CardTitle title={project.name} />
      <BodyText text={project.description} />

      <FlexWrapper gap="4px" wrap="wrap">
        {project.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </FlexWrapper>
      <StyledDiv>
        <Button href={project.netlify} text= "Live demo" variant="demo">
          <SvgIcon icon={<GlobeIcon />} width="44" viewBox="2 0 48 48" />
        </Button>
        <Button href={project.github} text= "View the code" variant="code">
          <SvgIcon icon={<GithubIcon />} width="44" viewBox="0 0 32 32" />
        </Button>
      </StyledDiv>
    </StyledProjectCard>
  )
}