import React from "react"
import styled from 'styled-components'
import welcome from './../gif/welcome.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 616px ) {
    height: 75vh;
  }
`

const AboutContainer = styled.div`
  color: white;
  ${'' /* padding: 0.75rem; */}
`

const ScrollLeft = styled.div`
  height: 50px;
  overflow: hidden;
  position: relative;
  p {
    position: absolute;
    width: 200%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    font-family: '-apple-system';
    right: 0;
    /* Starting position */
    -moz-transform:translateX(200%);
    -webkit-transform:translateX(200%);
    transform:translateX(200%);
    animation: scroll-left 50s linear infinite;

      @-moz-keyframes scroll-left {
      0% { -moz-transform: translateX(100%); }
      100% { -moz-transform: translateX(-100%); }
      }
      @-webkit-keyframes scroll-left {
      0% { -webkit-transform: translateX(100%); }
      100% { -webkit-transform: translateX(-100%); }
      }
      @keyframes scroll-left {
      0% {
      -moz-transform: translateX(100%); /* Browser bug fix */
      -webkit-transform: translateX(100%); /* Browser bug fix */
      transform: translateX(100%);
      }
      100% {
      -moz-transform: translateX(-100%); /* Browser bug fix */
      -webkit-transform: translateX(-100%); /* Browser bug fix */
      transform: translateX(-100%);
      }
      }
  }
`

const Welcome = styled.img`
  height: 50%;
  width: 100%;
`

const P = styled.p`
  color: lightgreen;
  font-size: 12px;
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          <ScrollLeft>
            <P>
              Welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay
              welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay welcome to my website, please enjoy your stay  welcome to my website, please enjoy your stay
            </P>
          </ScrollLeft>
          <Welcome src={welcome} />
        </AboutContainer>
      </Page>
    )
  }
}
