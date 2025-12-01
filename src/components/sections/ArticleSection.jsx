import { SectionTitle } from "../typography/typography"
import { ArticleCard } from "../cards/cards"
import articles from "../../data/articles"
import { StyledSection } from '../../styles/StyledSection'

export const ArticleSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} gap="56px" padding="120px 16px">
      <SectionTitle title="My words" variant={variant} />
      
      {articles.articles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </StyledSection>
  ) 
}