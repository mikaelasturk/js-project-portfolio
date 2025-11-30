import { Avatar } from '../ui/ui'
import { SectionTitle, CardTitle } from '../typography/typography'
import aboutMe from '../../data/aboutMe'

export const ContactSection = () => {
  return (
    <footer>
      <SectionTitle title="Contact Me" />
      <Avatar />
      <CardTitle title={aboutMe.name} />
      <CardTitle title={aboutMe.phone} />
      <CardTitle title={aboutMe.email} />
    </footer>
  )
}