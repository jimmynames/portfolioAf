import React from 'react'
import styled from 'styled-components'

import CubeComp from './../components/Cube'

import logo from './../images/logo.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.75rem;
`

const AboutContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
`

const H3 = styled.h3`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null};
`

const H1 = styled.h1`
  margin-top: 0;
`

const H2 = styled.h2`
  i {
    padding-right: 5px;
  }
`

const VerticalCenterAlign = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  position: relative;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    border: 2px solid ${props => props.theme.black};
    padding-right: 2px;
    transition: all 0.3s ease-in-out;
    img {
      padding-right: 3px;
    }
    @media (max-width: 414px) {
    }
    &:hover {
      background: ${props => props.theme.blue};
      border: 2px solid ${props => props.theme.blue};
    }
  }

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
  }

`

const RuinLogo = styled.img`
  height: 30px;
  margin: 0;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <AboutContainer>
          <H1>My names James but most people call me Jimmy</H1>
          <H2>I live on the internet under the alias of 👽<i>Names</i>👔</H2>
          <VerticalCenterAlign about><H3 about>I'm a Front-end Web Developer and I work at </H3><a href='https://ruin.studio' target='_blank' rel='noopener'><RuinLogo src={logo} />Studio</a></VerticalCenterAlign>
          <h4>I fuck with Css-in-js/Sass/Vanilla Css™, React.js⚛️ & SVGs💖</h4>
          <CubeComp />
        </AboutContainer>
      </Page>
    )
  }
}
