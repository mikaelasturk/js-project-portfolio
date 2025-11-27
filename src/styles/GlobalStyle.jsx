import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

  :root {

    /* Main settings */
    --font-header: "Montserrat", Arial, sans-serif;
    --font-text: "Hind", Arial, sans-serif;
    --highlight-primary-color: #0B24F5;
    --highlight-secondary-color: #FF4575;
    --border-radius-buttons: 40px;
    --primary-bg-color: #FFFFFF;
    --primary-text-color: #000000;
    --primary-accent-color: #0B24F5;
    --secondary-bg-color: #0B24F5;
    --secondary-text-color: #FFFFFF;

    /* Project Buttons */
    --card-btn-bg-color: #F5F5F5;
    --card-btn-text-color: #333333;
    --github-btn-hover-bg-color: #FFFFFF;
    --github-btn-hover-text-color: #EB5577;
    --netlify-btn-hover-bg-color: #0B24F5;
    --netlify-btn-hover-text-color: #FFFFFF;

    /* Article Section */
    --article-bg-color: #FFECEA;

    /* Article Button */
    --article-btn-bg-color: #FFFFFF;
    --article-btn-text-color : #333333;
    --article-btn-hover-bg-color: #FFD338;
    --article-btn-hover-text-color: #000000;

    /* SoMe links/icon */
    --icon-color: #D0D0D0;
    --icon-hover-color: #000000;

    /* Tag */
    --tag-bg-color: #000000;
    --tag-text-color: #FFFFFF;

    /* Special Colors */
    --skill-list-code-color: #EB5577;
    --skill-list-toolbox-color: #2483E0;
    --skill-list-upcoming-color: #6DB486;
    --skill-list-more-color: #FFDE30;
  }

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: var(--font-text);
    background-color: var(--bg-color);
    color: var(--primary-text-color);
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
    font-family: var(--font-header);
  }

  p {
    overflow-wrap: break-word;
  }

  ul, ol {
    list-style: none;
  }

  img.avatar {
    width: 150px;
    height: 150px;
    border-radius: 0%;
  }
  `