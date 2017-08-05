import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { injectGlobal } from 'styled-components';

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Slabo+27px');
  body, html {
    font-family: '-apple-system';
    font-size: 11px !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: white;
  }
  a {
    color: white;
    &:hover, &:focus, &:visited {
      color: white;
    }
  }

  * {
  margin: 0;
  }

  ul {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-padding-start: 0;
  }

  html, body, div, span, h1, h2, h3, p, a, img, ul, li, aside, figure, nav {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      font-family: '-apple-system';
  }

`;
