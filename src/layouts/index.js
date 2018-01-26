require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled  from 'styled-components'
import logo from './../gif/jn.gif'

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: black;
`

const Layout = styled.div`
  display: flex;
  flex-direcrion: row;
  ${'' /* background-color: black; */}

  @media (max-width: 693px) {
    flex-direction: column;
    height: 100vh;
  }
`
const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled.img`
  width: 100%;
  padding-top: 1.25rem;
  margin: 0;
  @media (max-width: 693px) {
    padding-top: 0;
    width: 50%;
    margin: 0 auto;
  }
`

const Container = styled.section`
  height: 100vh;
  width: 20%;
  background-color: black;
  box-sizing: border-box;
  @media (max-width: 693px) {
    width: 100%;
    height: 30vh;
    padding: 0.75em;
  }
  @media (max-width: 414px) {
    height: 25vh;
  }

`

const PaddingMobile = styled.div`
@media (max-width: 414px) {
  box-sizing: border-box;
}
`


const PageRender = styled.div`
  width: 80%;
  height: 100vh;
  background-color: black;
  padding: 0.75rem;
  @media (max-width: 693px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: auto;
  }
`

const NavMenu = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;
  @media (max-width: 693px) {  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: white;
  }
`

const NavItem = styled.li`
  font-size: 18px;
  color: white;
  padding: 0.666em;
  font-family: '-apple-system', Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  background-image: linear-gradient(to right,
                                      #CCFF33,
                                      #CCFF33 50%,
                                      transparent 50%,
                                      transparent);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .2s ease-in;
    width: 95%;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 693px) {
    padding: 0.1333em;
    margin: 0;
  }
  &:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  background: linear-gradient(-45deg, coral, blue, purple, orange);
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   padding-left: 1em;
   color: black;
   background-position: 0 0;
    a {
      color: black;
    }
     &:before {
     visibility: visible;
     -webkit-transform: scaleX(1);
     transform: scaleX(1);
    }
  }
  &:hover

  @-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Background>
      <Wrap>
        <Layout className="Layout Nav">

        <Helmet
          title="jimmyNames"
          meta={[
            { name: "description", content: "Jimmy Names" },
            { name: "keywords", content: "jimmy names, jimmyNames" },
          ]}
        />

        <Container className="LayoutContainer">
          <PaddingMobile>
            <Link to="/"><Logo src={logo} /></Link>

            <NavMenu className="Nav Menu">
              <Link to="/about/"><NavItem>About.i</NavItem></Link>
              <Link to="/me/"><NavItem>Me.png</NavItem></Link>
              <a href=''><NavItem>Cv.pdf</NavItem></a>
            </NavMenu>
          </PaddingMobile>
        </Container>

        <PageRender className='Page Render'>
          {this.props.children()}
        </PageRender>

      </Layout>
    </Wrap>
    </Background>
    )
  }
}
