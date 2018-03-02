import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import CTABannerComp from './../../components/CTABanner'

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



export default class AuralYouthPage extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1>Aural Youth</H1>
          <P>Freelance project</P>
          <P>Built using Gatsby.js, Styled-components & React.js</P>
          <P>Designed by <a href='https://www.linkedin.com/in/simone-ludeman-342042b3/' rel='noopener' target='_blank'>Simone Ludderman</a></P>
        </Intro>

        <ScrollAnimation animateIn='fadeIn' offset='500'>
          <ImageContainer>
            <img src={ay1} />
          </ImageContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn' offset='300'>
          <ImageContainer>
            <img src={ay2} />
          </ImageContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn' offset='200'>
          <ImageContainer>
            <img src={ay3} />
          </ImageContainer>
        </ScrollAnimation>

        <CTABannerComp codelink='https://github.com/jimmynames/auralYouth' weblink='https://auralyouth.co.uk' />
        
      </Page>
    )
  }
}
