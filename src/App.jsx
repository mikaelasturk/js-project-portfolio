import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "./styles/styles"
import { 
  HeroSection, 
  TechSection, 
  ProjectSection, 
  ArticleSection, 
  SkillsSection, 
  ContactSection 
} from "./componentsFolder/sectionsFolder/sectionsFile.js"

export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <header>
        <HeroSection variant="hero"/> 
      </header>
      <main> 
        <TechSection variant="tech"/>
        <ProjectSection variant="projects"/>
        <ArticleSection/>
        <SkillsSection/>
      </main>
      <footer>
        <ContactSection/>
      </footer>
    </ThemeProvider>
    </>

  )
}