import styled from 'styled-components'
import { UnorderedList } from "../ui/ui"
import { SkillTitle } from "../typography/typography"

const StyledSkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    align-items: flex-start;
  }
`

export const SkillColumn = ({ skillsList, colIndex }) => {
  return (
    <StyledSkillColumn>
      <SkillTitle title={skillsList.title} index={colIndex} />
      <UnorderedList items={skillsList.skills} />
    </StyledSkillColumn>
  )
}