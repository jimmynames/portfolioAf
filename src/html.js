import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from 'styled-components';

const HTML = styled.html`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: black;

  body {
    background: black !important;
  }
`

const Body = styled.body`
  background: black !important;
  margin: 0;
`

const App = styled.div`
  background: black;
  box-sizing: border-box;
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
            'background': 'black !important;'
          }}
        />
      )
    }

    return (
      <HTML lang="en" style="background:black !important;">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
        </head>
        <Body>

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
