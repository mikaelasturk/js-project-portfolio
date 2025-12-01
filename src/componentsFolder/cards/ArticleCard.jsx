import { CardImage, Tag, Button, SvgIcon } from "../ui/ui"
import { CardTitle, BodyText } from "../typography/typography"
import { DocumentIcon } from "../svg-icons/svg-icons"

export const ArticleCard = ({ article }) => {
  return (
    <>
      <CardImage src={article.image} alt={article.alt}/>
      <Tag tag={article.date} />
      <CardTitle title={article.name} />
      <BodyText text={article.description} />
      <Button href={article.link} text= "Read article">
        <SvgIcon icon={<DocumentIcon />} />
      </Button>
    </>
  )
}