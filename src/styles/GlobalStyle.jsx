import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  :root {
    /* Font settings */
    --font-heading: "Montserrat", Arial, sans-serif;
    --font-txt: "Hind", Arial, sans-serif;
    --weight-normal: 400;
    --weight-semibold: 600;
    --weight-bold: 700;
    --xxs-font-size: 18px;
    --xs-font-size: 24px;
    --s-font-size: 32px;
    --m-font-size: 56px;
    --l-font-size: 68px;
    --xl-font-size: 80px;
    --h1-font-weight: var(--weight-bold);
    --h2-font-weight: var(--weight-bold);
    --h3-font-weight: var(--weight-semibold);

    /* Mobile */
    --h1-font-size-mobile: var(--xs-font-size);
    --h2-font-size-mobile: var(--m-font-size);
    --h3-font-size-mobile: var(--xs-font-size);
   
    /* Tablet */
    --h1-font-size-tablet: var(--m-font-size);
    --h2-font-size-tablet: var(--l-font-size);
    --h3-font-size-tablet: var(--xs-font-size);

    /* Desktop */
    --h1-font-size-desktop: var(--xl-font-size);
    --h2-font-size-desktop: var(--xl-font-size);
    --h3-font-size-desktop: var(--s-font-size);
    
    /* Main colors */
    --1st-clr: #000000;
    --2nd-clr: #FFFFFF;
    --3rd-clr: #0B24F5;
    --4th-clr: #FF4575;

    /* Highlight colors */
    --highlight-1st: var(--3rd-clr);
    --highlight-2nd: var(--4th-clr);

    /* Background colors */
    --1st-bg-clr: var(--2nd-clr);
    --2nd-bg-clr: var(--3rd-clr);
    --3rd-bg-clr: #FFECEA;
    
    /* Accent colors */
    --acc-1st-clr: #EB5577;
    --acc-2nd-clr: #2483E0;
    --acc-3rd-clr: #6DB486;
    --acc-4th-clr: #FFDE30;

    /* SoMe links/icon colors*/
    --icon-clr: #D0D0D0;
    --icon-hover-clr: #000000;

    /* Tag styling */
    --tag-bg-clr: #000000;
    --tag-txt-clr: #FFFFFF;
    --tag-font-size: 16px;
    --tag-font-weight: var(--weight-semibold);
    --tag-font: var(--font-heading);

    /* Button styling */
    --1st-btn-bg-clr: #F5F5F5;
    --1st-btn-txt-clr: #333333;
    --2nd-btn-bg-clr: #FFFFFF;
    --2nd-btn-txt-clr: #333333;
    --btn-border-radius: 40px;
    --btn-font-size: 20px;
    --btn-font-weight: var(--weight-semibold);
    --btn-font: var(--font-heading);
    --btn-margin: 0 10px;
    --btn-padding: 4px 24px;

    /* Button hover color variations  */
    --code-btn-hover-bg-clr: var(--highlight-1st);
    --code-btn-hover-txt-clr: #FFFFFF;
    --demo-btn-hover-bg-clr: #EB5577;
    --demo-btn-hover-txt-clr: #FFFFFF;
    --article-btn-hover-bg-clr: #FFD338;
    --article-btn-hover-txt-clr: #000000;

    /* Hero, Project and Contact section colors */
    --section1-bg-clr: var(--1st-bg-clr);
    --section1-txt-clr: var(--1st-clr);
    --section1-highlight-clr: var(--highlight-1st);
    --section1-btn-bg-clr: var(--1st-btn-bg-clr);
    --section1-btn-txt-clr: var(--1st-btn-txt-clr);

    /* Tech & Skill Section colors */
    --section2-bg-clr: var(--2nd-bg-clr);
    --section2-txt-clr: var(--2nd-clr);
    --section2-heading-clr: var(--2nd-clr);
    --section2-subheading1-bg-clr: var(--acc-1st-clr);
    --section2-subheading2-bg-clr: var(--acc-2nd-clr);
    --section2-subheading3-bg-clr: var(--acc-3rd-clr);
    --section2-subheading4-bg-clr: var(--acc-4th-clr);  

    /* Article Section colors */
    --section3-bg-clr: var(--3rd-bg-clr);
    --section3-txt-clr: var(--1st-clr);
    --section3-highlight-clr: var(--highlight-2nd);
    --section3-btn-bg-clr: var(--2nd-btn-bg-clr);
    --section3-btn-txt-clr: var(--2nd-btn-txt-clr);
  }

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: var(--font-txt);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: var(--font-heading);
  }

  p {
    /* overflow-wrap: break-word; */
    font-size: var(--xxs-font-size);
  }

  ul, ol {
    list-style: none;
  }

  h1 {
    font-size: var(--h1-font-size-mobile);
    font-weight: var(--h1-font-weight);
  }
    
  h2 {
    font-size: var(--h2-font-size-mobile);
    font-weight: var(--h2-font-weight);
  }
    
  h3 {
    font-size: var(--h3-font-size-mobile);
    font-weight: var(--h3-font-weight);
  }
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: var(--h1-font-size-tablet);
    }
      
    h2 {
      font-size: var(--h2-font-size-tablet);
    }
      
    h3 {
      font-size: var(--h3-font-size-tablet);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    h1 {
      font-size: var(--h1-font-size-desktop);
    }
      
    h2 {
      font-size: var(--h2-font-size-desktop);
    }
      
    h3 {
      font-size: var(--h3-font-size-desktop);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {

  }
`
