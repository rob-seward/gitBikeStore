

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    html {
      background-color: white;
     
  }

  body {
    font-family: 'Maven Pro', sans-serif;
    font-size: .8em;
    letter-spacing: .1em;
    line-height: 16px;
    color: #000000;
  }

  @media (max-width: 700px) {
  .top {
    grid-template-areas:
      "hero hero"
      "cta1 cta2"
  }
  /* About */
  .about {
    grid-template-columns: 1fr;
  }
}


  

 

`;

export default GlobalStyles;
