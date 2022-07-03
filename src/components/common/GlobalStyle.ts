import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  html {
    width: 100%;
  }

  body {
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  ul, li, ol {
    list-style: none;
  }
`

export default GlobalStyle
