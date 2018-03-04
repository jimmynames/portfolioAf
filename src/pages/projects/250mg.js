import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import CTABannerComp from './../../components/CTABanner'

import mg1 from './../../images/projects/250/mg1.png'
import mg2 from './../../images/projects/250/mg2.png'

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



export default class MG250 extends React.Component {
  render () {
    return (
      <Page theme={this.props.theme}>
        <Intro>
          <H1>250mg</H1>
          <P>Charcoal Face Mask Project</P>
          <P>Built and conceptualised with <a href='https://twitter.com/senso_info' rel='noopener' target='_blank'>Senso36</a> to provide random[i]zed ambient visuals overlaying random[i]zed ambient mixes</P>
          <P>React Boilerplate, React.js, Styled-components</P>
        </Intro>

        <ScrollAnimation animateIn='fadeIn' offset='500'>
          <ImageContainer>
            <img src={mg1} />
          </ImageContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn' offset='300'>
          <ImageContainer>
            <img src={mg2} />
          </ImageContainer>
        </ScrollAnimation>


        <CTABannerComp codelink='https://github.com/thompson-mcdonald/250mg/' weblink='http://250mg.site' />

      </Page>
    )
  }
}
