import React from 'react'
import styled from 'styled-components'

import me from './../images/me.png'
import plant from './../images/plantlife.png'
import fish from './../images/fish.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
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

const ContactContainer = styled.div`
  display: block;
`

const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  ${'' /* height: 90vh;
  overflow: scroll;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll; */}
`

const ContactLi = styled.li`
  padding: 0.75rem;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;
  transition: background 1.666s ease;
  a {
    text-decoration: none;
    color: white;
    transition: all .1s ease-out;
    h1 {
      margin: 0;

      @media (max-width: 693px) {
        font-size: 24px;
      }
    }
  }
  &:hover {
    background: blue;
    background: ${props => props.gallery ? 'none' : null};
    a {
      color: black;
    }
    h1 {
      color: black;
    }
  }
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: scroll;

  @media (max-width: 616px) {
    display: none;
  }
`

const Window = styled.img`
  height: 50%;
  width: 50%;
  object-fit: contain;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: opacity 1.666s ease;
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <H1>Hyperlinks</H1>
          <P>A collection of links to stalk me further   👀</P>
          <P>Follow, Say <i>hey</i>     👋🏻</P>
          <P>Always down for making friends, collaborating, freelance and/or sharing music     ♻️</P>
        </Intro>
        <ContactContainer>
          <ContactUl>
            <ContactLi><a href='mailto:jim.me.ryan@gmail.com'><h1>Email - jim.me.ryan@gmail.com</h1></a></ContactLi>
            <ContactLi><a href='https://twitter.com/namescodes' target='_blank' rel='noopener'><h1>Twitter - @namescodes</h1></a></ContactLi>
            <ContactLi><a href='https://github.com/jimmynames' target='_blank' rel='noopener'><h1>Github - jimmynames</h1></a></ContactLi>
            <ContactLi><a href='https://www.linkedin.com/in/jimmyNames' target='_blank' rel='noopener'><h1>LinkedIn - /in/jimmyNames</h1></a></ContactLi>
            <ContactLi><a href='https://codepen.io/Jimmynames/' target='_blank' rel='noopener'><h1>Codepen - /Jimmynames</h1></a></ContactLi>
            <ContactLi><a href='http://teamtreehouse.com/names' target='_blank' rel='noopener'><h1>treehouse - /names</h1></a></ContactLi>
            <ContactLi><a href='https://www.codecademy.com/jimmynames' target='_blank' rel='noopener'><h1>Codecademy - /jimmynames</h1></a></ContactLi>
            <ContactLi><a href='https://www.freecodecamp.org/jimmynames' target='_blank' rel='noopener'><h1>freeCodeCamp - /jimmynames</h1></a></ContactLi>
            <ContactLi><a href='https://jimmynames.tumblr.com/' target='_blank' rel='noopener'><h1>tumblr - //jimmynames.</h1></a></ContactLi>
            <ContactLi><a href='https://soundcloud.com/namesnames' target='_blank' rel='noopener'><h1>Soundcloud - /namesnames</h1></a></ContactLi>
            <ContactLi gallery>
              <Gallery>
                <Window src={me} />
                <Window src={plant} />
                <Window src={fish} />
              </Gallery>
            </ContactLi>
          </ContactUl>
        </ContactContainer>
      </Page>
    )
  }
}
