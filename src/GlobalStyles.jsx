import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1;
  }
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  body {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
    &:visited {
      color: #000;
    }
  }

  button {
    border: 1px solid #ddd;
    background: #fff;
  }
  ul {
    list-style: none;
  }
  #root {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
`

export const NoData = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: red;
`
