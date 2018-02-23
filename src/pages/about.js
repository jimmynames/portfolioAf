import React from "react"
import styled from 'styled-components'
import logo from './../images/logo.png'
// import Page from './../components/Page'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
`

const AboutContainer = styled.div`
  color: white;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
`

const H3 = styled.h3`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null };
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
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    border: 2px solid black;
    padding-right: 2px;
    transition: all 0.3s ease-in-out;
    img {
      padding-right: 3px;
    }
    @media (max-width: 414px) {
    }
    &:hover {
      background: blue;
      border: 2px solid blue;
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

const CubeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
  justify-content: flex-start;
  h4 {
    margin: 0;
    padding-top: 8px;
  }
`

const Cube = styled.div`
  height: 30px;
  width: 300px;
  margin-left: 1rem;
  border: 2px solid white;
  overflow:hidden;
  overflow-y:auto;
  transition: height 0.3s ease-in-out;
  &:hover {
    background: blue;
    border: 2px solid blue;
    transition: all 0.2s ease;
    height: 60px;

    ul {
      color: white;
      transition: color 0.3s ease;
    }
  }
`

const CubeList = styled.ul`
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0;
  list-style-type: none;
  padding: 0.3rem;
  box-sizing: border-box;
  padding-bottom: 33px;
`
const CubeListItem = styled.li`
  font-size: 18px;
  line-height: 18px;
  padding: 0.3em 0;
  overflow: visible;
  width: 33vw;
  &:first-child {
    padding-top: 0;
  }
`

const H1 = styled.h1`
  margin-top: 0;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          <H1>My names James but most people call me Jimmy</H1>
          <h2>I live on the internet under the alias of 👔<i>Jimmy✨Names</i>👽</h2>
          <VerticalCenterAlign about><H3 about>I'm a Front-end Web Developer and I work at </H3><a href="https://ruin.studio" target="_blank" rel="noopener"><RuinLogo src={logo}/>Studio</a></VerticalCenterAlign>
          <h4>I fuck with Css-in-js/Sass/Vanilla Css™, React.js⚛️ & SVGs💖</h4>
          <CubeContainer>
            <h4>I also dig</h4>
            <Cube>
              <CubeList>
                <CubeListItem>music</CubeListItem>
                <CubeListItem>anime</CubeListItem>
                <CubeListItem>art..</CubeListItem>
                <CubeListItem>blah millennial blah stuff</CubeListItem>
                <CubeListItem>plants</CubeListItem>
                <CubeListItem>sunsets</CubeListItem>
                <CubeListItem>challenging myself</CubeListItem>
                <CubeListItem>stories</CubeListItem>
                <CubeListItem>style</CubeListItem>
                <CubeListItem>performing</CubeListItem>
                <CubeListItem>emoji use</CubeListItem>
                <CubeListItem>candles</CubeListItem>
                <CubeListItem>fashion</CubeListItem>
                <CubeListItem>youtube dj'ing</CubeListItem>
                <CubeListItem>writing</CubeListItem>
                <CubeListItem>memes</CubeListItem>
                <CubeListItem>lighting</CubeListItem>
                <CubeListItem>swimming</CubeListItem>
                <CubeListItem>literature</CubeListItem>
                <CubeListItem>drawing</CubeListItem>
                <CubeListItem>comfort</CubeListItem>
                <CubeListItem>tinder lol</CubeListItem>
                <CubeListItem>sesh</CubeListItem>
                <CubeListItem>culture</CubeListItem>
                <CubeListItem>wine</CubeListItem>
                <CubeListItem>purple</CubeListItem>
                <CubeListItem>teams/packs/gangs</CubeListItem>
                <CubeListItem>graffiti</CubeListItem>
                <CubeListItem>wrestling</CubeListItem>
                <CubeListItem>things</CubeListItem>
                <CubeListItem>learning</CubeListItem>
                <CubeListItem>brutalism</CubeListItem>
                <CubeListItem>irony</CubeListItem>
                <CubeListItem>good design</CubeListItem>
                <CubeListItem>weed i guess</CubeListItem>
                <CubeListItem>meditation</CubeListItem>
                <CubeListItem>good people</CubeListItem>
                <CubeListItem>eating out</CubeListItem>
                <CubeListItem>exposed brick, plaster..</CubeListItem>
                <CubeListItem>making jokes</CubeListItem>
                <CubeListItem>work weirdly</CubeListItem>
                <CubeListItem>good energy</CubeListItem>
                <CubeListItem>chilling</CubeListItem>
                <CubeListItem>occasional beer</CubeListItem>
                <CubeListItem>dancing</CubeListItem>
                <CubeListItem>nature</CubeListItem>
                <CubeListItem>code duh</CubeListItem>
                {/* <CubeListItem>aspirational dreams of becoming a 🦄</CubeListItem> */}
              </CubeList>
            </Cube>
          </CubeContainer>
        </AboutContainer>
      </Page>
    )
  }
}
