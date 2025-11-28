import { SectionTitle } from "../typography/typography"
import { SkillColumn } from "../cards/cards"
import skills from "../../data/skills"

export const SkillsSection = () => {
  return (
    <>
    <SectionTitle title="Skills" />
          
    {skills.skillsList.map((skill, index) => (
      <SkillColumn
        key={index}
        skillsList={skill}
      />
    ))}
    </>
  )
}