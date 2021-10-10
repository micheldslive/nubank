import "bootstrap/dist/css/bootstrap.min.css";

import { createGlobalStyle } from "styled-components";
import GraphikRegularWoff2 from "assets/fonts/Graphik-Regular.woff2";
import GraphikRegularWoff from "assets/fonts/Graphik-Regular.woff";
import GraphikRegularTrue from "assets/fonts/Graphik-Regular.ttf";
import GraphikMediumWoff2 from "assets/fonts/Graphik-Medium.woff2";
import GraphikMediumWoff from "assets/fonts/Graphik-Medium.woff";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:Graphik-Regular;
  src:url(${GraphikRegularWoff2}) format('woff2'),
  url(${GraphikRegularWoff}) format('woff'),
  url(${GraphikRegularTrue}) format('true');
  font-style:normal;
  font-display:swap;
}
@font-face {
  font-family:Graphik-Medium;
  src:url(${GraphikMediumWoff2}) format('woff2'),
  url(${GraphikMediumWoff}) format('woff');
  font-style:normal;
  font-display:swap;
}

:root {
  --gray: #f5f5f5;
  --gray2: #ededed;
  --gray3: #ccc;
  --purple: #820ad1;
  --purple2: #820ae1;
  --purple3: #ab4bea;
  --black: #191919;
  --black1: #222222;
  --black2: #a2a2a2;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: Graphik-Medium, Graphik-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: white;

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  outline: 1px solid var(--purple);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
}

a, a:hover {
  text-decoration: none;
  color: black;
}

section {
  width: 85%;
  margin: 0 auto;
  max-width: 1180px;

  @media (max-width: 600px) {
    width: 90%;
  }
}

`;

export default GlobalStyle;
