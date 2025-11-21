import { CardImg } from "../ui/CardImage.jsx"
import { CardTitle } from "../typography/CardTitle.jsx"
import { BodyText } from "../typography/BodyText.jsx"
import { Tag } from "../ui/Tag.jsx"
import { Button } from "../ui/Button.jsx"

export const ProjectCard = () => {
  return (
    <>
      <CardImg />
      <CardTitle />
      <BodyText />
      <Tag />
      <Button />
    </>
  )
}