import React from 'react'
import styled from 'styled-components'

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
  width: 100%;
  max-width: 300px;
  margin-left: 1rem;
  border: 2px solid ${props => props.theme.blue};

  overflow:hidden;
  overflow-y:auto;
  transition: height 0.3s ease-in-out;
  &:hover {
    background: ${props => props.theme.blue};
    border: 2px solid ${props => props.theme.blue};
    transition: all 0.2s ease;
    height: 60px;

    ul {
      color: ${props => props.theme.black};
      transition: color 0.3s ease;
    }
  }
  @media (max-width: 693px) {
    width: 65%;
    min-width: auto;
    max-width: auto;
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

export default class CubeComp extends React.Component {
  render () {
    return (
      <CubeContainer theme={this.props.theme}>
        <h4>I also dig</h4>
        <Cube>
          <CubeList>
            <CubeListItem>music</CubeListItem>
            <CubeListItem>anime</CubeListItem>
            <CubeListItem>art..</CubeListItem>
            <CubeListItem>blah millennial blah stuff</CubeListItem>
            <CubeListItem>plants</CubeListItem>
            <CubeListItem>muted youtube videos</CubeListItem>
            <CubeListItem>sunsets</CubeListItem>
            <CubeListItem>challenging myself</CubeListItem>
            <CubeListItem>stories</CubeListItem>
            <CubeListItem>style</CubeListItem>
            <CubeListItem>performing</CubeListItem>
            <CubeListItem>emoji use</CubeListItem>
            <CubeListItem>instagram</CubeListItem>
            <CubeListItem>candles</CubeListItem>
            <CubeListItem>croissants</CubeListItem>
            <CubeListItem>fashion</CubeListItem>
            <CubeListItem>youtube dj'ing</CubeListItem>
            <CubeListItem>writing</CubeListItem>
            <CubeListItem>memes</CubeListItem>
            <CubeListItem>color: orange</CubeListItem>
            <CubeListItem>lighting</CubeListItem>
            <CubeListItem>swimming</CubeListItem>
            <CubeListItem>dumplings</CubeListItem>
            <CubeListItem>internet culture</CubeListItem>
            <CubeListItem>literature</CubeListItem>
            <CubeListItem>drawing</CubeListItem>
            <CubeListItem>comfort</CubeListItem>
            <CubeListItem>tinder lol</CubeListItem>
            <CubeListItem>sesh</CubeListItem>
            <CubeListItem>culture</CubeListItem>
            <CubeListItem>wine</CubeListItem>
            <CubeListItem>fruit</CubeListItem>
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
            <CubeListItem>healthy eating</CubeListItem>
            <CubeListItem>occasional beer</CubeListItem>
            <CubeListItem>dancing</CubeListItem>
            <CubeListItem>nature</CubeListItem>
            <CubeListItem>code duh</CubeListItem>
          </CubeList>
        </Cube>
      </CubeContainer>
    )
  }
}
