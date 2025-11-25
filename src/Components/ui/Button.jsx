export const Button = ({ href, children, text} ) => {
  return (
    <a href={href}>
      {children}
      {text}
    </a>
  )
}