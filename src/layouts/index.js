require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import logo from './../gif/jn.gif'

import withRouter from 'react-router-dom/withRouter'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './animations.css'

const WrapLayout = styled.div`
	max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direcrion: row;
  width: 100%;

  @media (max-width: 693px) {
    flex-direction: column;
    height: 100vh;
  }
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

const Nav = styled.section`
  width: 20%;
  position: fixed;
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
  height: 100%;
@media (max-width: 414px) {
  box-sizing: border-box;
}
`


const PageRender = styled.div`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 1.35rem;
  padding-left: 4rem;
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
  width: 100%;
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
  font-family: 'Open Sans Condensed', Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  background-image: linear-gradient(to right,
                                      blue,
                                      blue 50%,
                                      transparent 80%,
                                      transparent);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .2s ease-in;
    width: 100%;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 693px) {
    padding: 0.1333em;
    margin: 0;
  }
  ${'' /* &:before {
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
} */}

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

injectGlobal`
  body {
    background: black;
  }
  h1, h2, h3, h4, h5, p, a {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`

const theme = {
	header: '40px',
	copy: '20px',
  background: 'pink'
}



const TransitionContainer = styled.div`
  width: 78vw;
  left: 20%;
`

class TransitionHandler extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname
  }

  render () {
    const {children} = this.props
    return (
      <TransitionContainer className='transition-container'>
        {children}
      </TransitionContainer>
    )
  }
}

const TemplateWrapper = ({ children, location }) => (
      <ThemeProvider className="theme" theme={theme}>
        <WrapLayout className='Nav-PageRender-Flex-Container Also-Wrap'>
        <Helmet
          title="jimmyNames"
          meta={[
            { name: "description", content: "Jimmy Names" },
            { name: "keywords", content: "jimmy names, jimmyNames" },
          ]}
        />

        <Nav className="Nav">
          <PaddingMobile>
            <Link to="/" exact><Logo src={logo} /></Link>

            <NavMenu className="Menu">
              <Link to="/about/"><NavItem>About.info</NavItem></Link>
              <Link to="/me/"><NavItem>Me.href</NavItem></Link>
              <Link to="/projects/"><NavItem>Work.life</NavItem></Link>
              <a href=''><NavItem>Cv.pdf</NavItem></a>
            </NavMenu>
          </PaddingMobile>
        </Nav>

        <TransitionGroup>
          <CSSTransition
              key={location.pathname}
              classNames="example"
              timeout={{ enter: 1000, exit: 300 }}
            >
              <TransitionHandler location={location}>

        <PageRender id="page-wrap" className='PageRender'>
          {children()}
        </PageRender>
      </TransitionHandler>
    </CSSTransition>
</TransitionGroup>
    </WrapLayout>
    </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default withRouter(TemplateWrapper)
