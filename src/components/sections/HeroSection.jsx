import styled from 'styled-components'
import { Avatar } from '../ui/ui'
import { BodyText, PageTitle } from '../typography/typography'
import { intro, role, description, avatar } from "../../data/aboutMe"
import { StyledSection } from '../../styles/StyledSection'

const MobileOnly = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const Desktop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroSection = ({ variant }) => {
  return (
    <>
      <MobileOnly>
        <StyledSection variant={variant} gap="32px">
          <Avatar />
          <StyledMessage>
            <BodyText text={intro} weight="semibold" fontFam="heading" />
            <PageTitle title={role} variant={variant} />
          </StyledMessage>
          <BodyText text={description} />
        </StyledSection>
      </MobileOnly>
      <Desktop>
        <StyledSection variant={variant}>
          <StyledMessage>
            <BodyText text={intro} />
            <PageTitle title={role} variant={variant} />
          </StyledMessage>
          <StyledDiv>
            <Avatar />
            <BodyText text={description} />
          </StyledDiv>
        </StyledSection>
      </Desktop>
    </>
  )
}