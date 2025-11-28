import { UnorderedList } from "../ui/ui"
import { SkillTitle } from "../typography/typography"


export const SkillColumn = ({ skillsList }) => {
  return (
    <>
    <SkillTitle title={skillsList.title} />
      <UnorderedList items={skillsList.skills} />
    </>
  )
}