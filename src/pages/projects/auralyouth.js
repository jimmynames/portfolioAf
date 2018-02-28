import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ay1 from './../../images/projects/auralyouth/ay1.png'
import ay2 from './../../images/projects/auralyouth/ay2.png'
import ay3 from './../../images/projects/auralyouth/ay3.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.75rem;
`

const Intro = styled.div`
  width: 50%;
  @media (max-width: 693px) {
    width: 100%;
  }
`

const H1 = styled.h1`
  margin-top: 0;
`

const P = styled.p`
`

const ImageContainer = styled.section`
  height: 100%;
  width: 100%;
  margin: 30px 0;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    height: 90%;
    width: 100%;
  }
`

const Outro = styled.section`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
align-content: center;

a {
  text-decoration: none;
  padding: 1em 1.5em;
  background: blue;
  min-width: 136.66px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid black;
  margin: 0.666em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: white;
    color: blue;
    border: 2px solid blue;
  }
}
`

export default class AuralYouthPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1>Aural Youth</H1>
          <P>Freelance project</P>
          <P>Built using Gatsby.js, Styled-components & React.js</P>
        </Intro>

        <ImageContainer>
          <img src={ay1} />
        </ImageContainer>

        <ImageContainer>
          <img src={ay2} />
        </ImageContainer>

        <ImageContainer>
          <img src={ay3} />
        </ImageContainer>

        <Outro>
          <Link to='/projects'>🔙 Projects</Link>
          <a href='https://auralyouth.co.uk' rel='noopener' target='_blank'>🌐 Website</a>
          <a href='https://github.com/jimmynames/auralYouth' rel='noopener' target='_blank'>💾 Code</a>
        </Outro>
      </Page>
    )
  }
}
