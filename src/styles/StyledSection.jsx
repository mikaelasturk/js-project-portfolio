import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme, variant }) => variant ? theme.sections[variant].bgClr : "inherit"};
  color: ${({ theme, variant }) => variant ? theme.sections[variant].textClr : "inherit"};
`