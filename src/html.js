import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { injectGlobal, css } from 'styled-components';
// import { TypographyStyle } from "react-typography"
// import typography from "./utils/typography"

const HTML = styled.html`
  background: black !important;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`

const Body = styled.body`
  background: black;
  margin: 0;
`

const App = styled.div`
  background: black;
`

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css"),
          }}
        />
      )
    }

    return (
      <HTML lang="en" style="background:black;">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
        </head>
        <Body style="margin:0;">

          <App
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}

        </Body>
      </HTML>
    )
  }
}
