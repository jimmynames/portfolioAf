import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import CTABannerComp from './../../components/CTABanner'

import spr1 from './../../images/projects/srdesign/spr1.png'
import spr2 from './../../images/projects/srdesign/spr2.png'

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
  a{
    position: relative;
    text-decoration: none;
    padding: 5px;
    &:after {
      position: absolute;
      content: '';
      height: 2px;
      bottom: -4px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100%;
      background: blue;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    &:hover {
      &:after {
        height: 100%;
        bottom: 0;
        z-index: -1;
      }
    }
  }
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
    cursor: pointer;
  }
}
`

export default class SeanRyanDesignPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1>Sean Ryan Design Portfolio</H1>
          <P>Brotherly Love Project</P>
          <P>Built in 1 day 💪🏻 using Gatsby.js, Styled-components & React.js</P>
          <P>Designed by <a href='https://www.youtube.com/watch?v=_Gqwi7Y96sk' rel='noopener' target='_blank'>Ya Boi Names</a></P>
        </Intro>

        <ScrollAnimation animateIn='fadeIn' offset='500'>
          <ImageContainer>
            <img src={spr1} />
          </ImageContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn' offset='300'>
          <ImageContainer>
            <img src={spr2} />
          </ImageContainer>
        </ScrollAnimation>

        <CTABannerComp weblink='https://seanryan.design' codelink='https://github.com/jimmynames/nayrnaes' />

      </Page>
    )
  }
}
