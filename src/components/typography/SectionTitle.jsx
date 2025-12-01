import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  color: ${({ theme, variant }) => variant ? theme.sections[variant].headingClr: "inherit"};
  text-align: center;
`

export const SectionTitle = ({ title, variant }) => {
  return (
    <StyledSectionTitle variant={variant}>
      {title}
    </StyledSectionTitle>
  )
}
