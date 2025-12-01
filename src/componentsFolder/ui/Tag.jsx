import styled from "styled-components"

const StyledTag = styled.span`
  background-color: var(--tag-bg-color);
  color: var(--tag-text-color);
  padding: 2px 8px 0;
  margin-right: 0.5rem;
`

export const Tag = ({ tag }) => {
  return (
    <StyledTag className="tag">
      {tag}
    </StyledTag>
  )
}