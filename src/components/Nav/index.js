import React from 'react'
import styled from 'styled-components'
// import Draggable from 'react-draggable'
import logo from './../../gif/jn.gif'
import Link from "gatsby-link"
const NavComp = styled.section`
  width: 20%;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 693px) {
    width: 100%;
    padding: 0.75em;
    position: relative;
  }
  @media (max-width: 414px) {
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

const PaddingMobile = styled.div`
  height: 100%;
@media (max-width: 414px) {
  box-sizing: border-box;
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
  ${'' /* linear-gradient(to right, transparent, red 50%, transparent 90%, transparent) */}
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

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shouldHide: false
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.setState(prevState => ({
      shouldHide: !prevState.shouldHide
    }));
  }
  render () {
    return (
      <NavComp className="Nav">
        <PaddingMobile>
          <Link to="/" exact><Logo src={logo} /></Link>

          <NavMenu className="Menu">
            <Link to="/about/"><NavItem>About.info</NavItem></Link>
            <Link to="/me/"><NavItem>Me.href</NavItem></Link>
            <Link to="/projects/"><NavItem>Work.life</NavItem></Link>
            <a onClick={this.onClick}><NavItem>Cv.pdf</NavItem></a>
          </NavMenu>
        </PaddingMobile>
      </NavComp>

    )
  }
}
