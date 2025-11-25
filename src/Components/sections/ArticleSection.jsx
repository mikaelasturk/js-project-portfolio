import { SectionTitle } from "../typography/typography"
import { ArticleCard } from "../cards/cards"
import articles from "../../data/articles"

export const ArticleSection = () => {
  return (
    <>
      <SectionTitle title="My words" />
      
      {articles.articles.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </>
  ) 
}