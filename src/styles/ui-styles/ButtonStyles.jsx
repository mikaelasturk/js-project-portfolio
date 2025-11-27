import styled, { css } from "styled-components"

const base = css`
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
`;

const github = css`
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
`

const netlify = css`
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
`

const article = css`
  background: transparent;
  border: 2px solid var(--button-outline-border);
  color: var(--button-outline-text);
`

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s ease;

  ${({ variant }) => variant === "Base" && base}
  ${({ variant }) => variant === "GitHub" && github}
  ${({ variant }) => variant === "Netlify" && netlify}
  ${({ variant }) => variant === "ReadArticle" && article}
`
