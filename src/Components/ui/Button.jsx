import styled from "styled-components"

const StyledButton = styled.a`
  background-color: var(--primary-accent-color);
  color: var(--secondary-text-color);
  border-radius: var(--border-radius-buttons);
  /* padding: 10px 0px; */
  max-width: 200px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-weight: 600; */
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: var(--secondary-bg-color);
    color: var(--primary-text-color);
  }
`

export const Button = ({ href, children, text} ) => {
  return (
    <StyledButton href={href}>
      {children}
      {text}
    </StyledButton>
  )
}