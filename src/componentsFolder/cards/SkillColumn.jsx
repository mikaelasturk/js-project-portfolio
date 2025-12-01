import styled from 'styled-components'
import { UnorderedList } from "../ui/ui"
import { SkillTitle } from "../typography/typography"

const StyledSkillColumn = styled.div`



`


export const SkillColumn = ({ skillsList }) => {
  return (
    <StyledSkillColumn>
    <SkillTitle title={skillsList.title} />
      <UnorderedList items={skillsList.skills} />
    </StyledSkillColumn>
  )
}