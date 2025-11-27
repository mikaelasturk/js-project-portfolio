import { Avatar } from '../ui/ui'
import { BodyText, PageTitle } from '../typography/typography'
import { intro, role, description, avatar_url } from "../../data/aboutMe"

export const HeroSection = () => {
  return (
    <header>
      <Avatar src={avatar_url} />
      <BodyText text={intro} />
      <PageTitle title={role}/>
      <BodyText text={description} />
    </header>
  )
}