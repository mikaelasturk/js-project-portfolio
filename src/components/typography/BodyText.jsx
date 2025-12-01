import styled from "styled-components"

const StyledBodyText = styled.p`
font-weight: ${({ weight }) => weight === "semibold" ? "500" : 'inherit'};
font-family: ${({ fontFam }) => fontFam === "heading" ? "var(--font-heading)" : "inherit"};

font-size: ${({ fontSize }) => fontSize === "xs" ? "21px" : "inherit"};
`

export const BodyText = ({ text, weight, fontFam, fontSize}) => {
  return (
    <StyledBodyText weight={weight} fontFam={fontFam} fontSize={fontSize}>
      {text}
    </StyledBodyText>
  )
}