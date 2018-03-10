import React from 'react'
import styled from 'styled-components'

import {H1} from './../components/HTML/H1'
import {P} from './../components/HTML/P'

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

const H1me = styled(H1)`
  margin-top: 0;
`

const Pme = styled(P)`
`

const H1link = styled(H1)``

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
    ${'' /* color: ${props => props.theme.white}; */}
    transition: all .1s ease-out;
    h1 {
      margin: 0;

      @media (max-width: 693px) {
        font-size: 24px;
      }
    }
  }
  &:hover {
    background: ${props => props.theme.blue};
    background: ${props => props.gallery ? 'none' : null};
    a {
      color: ${props => props.theme.black};
    }
    h1 {
      color: ${props => props.theme.black};
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
          <H1me>Hyperlinks</H1me>
          <Pme>A collection of links to stalk me further   👀</Pme>
          <Pme>Follow, Say <i>hey</i>     👋🏻</Pme>
          <Pme>Always down for making friends, collaborating, freelance and/or sharing music     ♻️</Pme>
        </Intro>
        <ContactContainer>
          <ContactUl>
            <ContactLi><a href='mailto:jim.me.ryan@gmail.com'><H1link>Email - jim.me.ryan@gmail.com</H1link></a></ContactLi>
            <ContactLi><a href='https://twitter.com/namescodes' target='_blank' rel='noopener'><H1link>Twitter - @namescodes</H1link></a></ContactLi>
            <ContactLi><a href='https://github.com/jimmynames' target='_blank' rel='noopener'><H1link>Github - jimmynames</H1link></a></ContactLi>
            <ContactLi><a href='https://www.linkedin.com/in/jimmyNames' target='_blank' rel='noopener'><H1link>LinkedIn - /in/jimmyNames</H1link></a></ContactLi>
            <ContactLi><a href='https://codepen.io/Jimmynames/' target='_blank' rel='noopener'><H1link>Codepen - /Jimmynames</H1link></a></ContactLi>
            <ContactLi><a href='http://teamtreehouse.com/names' target='_blank' rel='noopener'><H1link>treehouse - /names</H1link></a></ContactLi>
            <ContactLi><a href='https://www.codecademy.com/jimmynames' target='_blank' rel='noopener'><H1link>Codecademy - /jimmynames</H1link></a></ContactLi>
            <ContactLi><a href='https://www.freecodecamp.org/jimmynames' target='_blank' rel='noopener'><H1link>freeCodeCamp - /jimmynames</H1link></a></ContactLi>
            <ContactLi><a href='https://jimmynames.tumblr.com/' target='_blank' rel='noopener'><H1link>tumblr - //jimmynames.</H1link></a></ContactLi>
            <ContactLi><a href='https://soundcloud.com/namesnames' target='_blank' rel='noopener'><H1link>Soundcloud - /namesnames</H1link></a></ContactLi>
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
