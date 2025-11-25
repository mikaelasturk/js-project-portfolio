import { Avatar } from '../ui/ui'
import { BodyText, PageTitle } from '../typography/typography'
import { intro, role, description } from "../../data/aboutMe"

export const HeroSection = () => {
  return (
    <>
      <Avatar />
      <BodyText text={intro} />
      <PageTitle title={role}/>
      <BodyText text={description} />
    </>
  )
}