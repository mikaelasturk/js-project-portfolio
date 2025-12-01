import styled from 'styled-components'

export const StyledSkillTitle = styled.h3`
  background-color: ${({ theme, $index }) => theme.sections.skills.subBgClr[$index].bgClr || "inherit"};
  color: ${({ theme, $index }) => theme.sections.skills.subBgClr[$index].textClr || "inherit"};
  max-width: fit-content;
  padding: 0 8px;
  
`

export const SkillTitle = ({ title, index }) => {
  return (
    <StyledSkillTitle $index={index}>
      {title}
    </StyledSkillTitle>
  )
} 