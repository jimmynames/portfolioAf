import React from "react"
import styled from 'styled-components'
import logo from './../images/logo.png'
// import Page from './../components/Page'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
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
    font-family: '-apple-system';
    @media (max-width: 414px) {
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
  justify-content: flex-start;
  h4 {
    margin: 0;
  }
`

const Cube = styled.div`
  height: 30px;
  width: 33.33%;
  margin-left: 1rem;
  border: 2px dotted blue;
  overflow: scroll;
  &:hover {
    background: blue;
    border: 2px dotted white;
    transition: all 0.2s ease;
    ul {
      color: white;
      transition: color 0.3s ease;
    }
  }
`

const CubeList = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  list-style-type: none;
  padding: 0.3rem;
  box-sizing: border-box;
`
const CubeListItem = styled.li`
  font-size: 18px;
  line-height: 18px;
  padding: 0.3em 0;
  overflow: visible;
  width: 33vw;
`


export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          <h1>My names James but most people call me Jimmy</h1>
          <h2>I live on the internet under the alias of 👔<i>Jimmy✨Names</i>👽</h2>
          <VerticalCenterAlign about><H3 about>I'm a Front-end Web Developer and I work at </H3><a href="https://ruin.studio" target="_blank" rel="noopener"><RuinLogo src={logo}/>Studio</a></VerticalCenterAlign>
          <h4>I love scss🤙🏻, react⚛️ & good coffee💯☕️</h4>
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
                <CubeListItem>stories</CubeListItem>
                <CubeListItem>emoji use</CubeListItem>
                <CubeListItem>candles</CubeListItem>
                <CubeListItem>fashion</CubeListItem>
                <CubeListItem>writing</CubeListItem>
                <CubeListItem>memes</CubeListItem>
                <CubeListItem>swimming</CubeListItem>
                <CubeListItem>literature</CubeListItem>
                <CubeListItem>tinder lol</CubeListItem>
                <CubeListItem>sesh</CubeListItem>
                <CubeListItem>culture</CubeListItem>
                <CubeListItem>wine</CubeListItem>
                <CubeListItem>graffiti</CubeListItem>
                <CubeListItem>things</CubeListItem>
                <CubeListItem>learning</CubeListItem>
                <CubeListItem>irony</CubeListItem>
                <CubeListItem>good design</CubeListItem>
                <CubeListItem>weed i guess</CubeListItem>
                <CubeListItem>good people</CubeListItem>
                <CubeListItem>eating out</CubeListItem>
                <CubeListItem>exposed brick, plaster..</CubeListItem>
                <CubeListItem>making jokes</CubeListItem>
                <CubeListItem>work weirdly</CubeListItem>
                <CubeListItem>chilling</CubeListItem>
                <CubeListItem>pale ales</CubeListItem>
                <CubeListItem>dancing</CubeListItem>
                <CubeListItem>nature</CubeListItem>
                <CubeListItem>code duh</CubeListItem>
                <CubeListItem>aspirational dreams of becoming a 🦄</CubeListItem>
              </CubeList>
            </Cube>
          </CubeContainer>
        </AboutContainer>
      </Page>
    )
  }
}
