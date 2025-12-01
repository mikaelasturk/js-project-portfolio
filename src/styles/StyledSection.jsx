import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme, variant }) => variant ? theme.sections[variant].bgClr : "inherit"};
  color: ${({ theme, variant }) => variant ? theme.sections[variant].textClr : "inherit"};
  padding: ${({ padding }) => padding || "56px 16px"};
  gap: ${({ gap }) => gap || "0px"};

  /* Tablet and up --> */
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
