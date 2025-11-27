import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "./styles/styles"
import { 
  HeroSection, 
  TechSection, 
  ProjectSection, 
  ArticleSection, 
  SkillsSection, 
  ContactSection 
} from "./components/sections/sections"

export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <HeroSection/>
      <TechSection/>
      <ProjectSection/>
      <ArticleSection/>
    </ThemeProvider>
    </>

  )
}