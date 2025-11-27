export const UnorderedList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  )
}