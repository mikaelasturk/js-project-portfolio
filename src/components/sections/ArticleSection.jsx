import styled from "styled-components"
import { SectionTitle } from "../typography/typography"
import { ArticleCard } from "../cards/cards"
import articles from "../../data/articles"
import { StyledSection } from '../../styles/StyledSection'


const GridContainer = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 40px;

  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {      
    display: grid;
    width: fit-content;
    margin: 0 auto;
    grid-template-columns: repeat(2, auto);
    column-gap: 40px;
    row-gap: 40px;
  }       
  @media (min-width: ${props => props.theme.breakpoints.desktopLarge}) {      
    column-gap: 64px;
    row-gap: 64px;
  }
`
export const ArticleSection = ({ variant }) => {
  return (
    <StyledSection variant={variant} gap="56px" padding="120px 16px">
      <SectionTitle title="My words" variant={variant} textAlign="left"/>
    
      <GridContainer>
        {articles.articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
          />
        ))}
      </GridContainer>
    </StyledSection>
  ) 
}