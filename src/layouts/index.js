import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Nav from './../components/Nav'
import DownloadComp from './../components/Download'

import logo from './../gif/jn.gif'
import Link from 'gatsby-link'

import {UL} from './../components/HTML/UL'
import {LI} from './../components/HTML/LI'

import withRouter from 'react-router-dom/withRouter'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './animations.css'

require('normalize.css')

// const theme = {
//   header: '40px',
//   copy: '20px',
//   darkColor: {
//     black: 'black',
//     white: 'white',
//     blue: 'blue'
//   },
//   lightColor: {
//     black: 'blue',
//     white: 'white',
//     blue: 'blue'
//   }
// }

const nightMode = {
  label: 'nightMode',
  black: 'black',
  white: 'white',
  blue: 'blue'
}

const lightMode = {
  label: 'lightMode',
  black: 'white',
  white: 'black',
  blue: 'blue'
}

const WrapLayout = styled.div`
  max-width: 1200px;
  ${'' /* max-height: 750px; */}
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 693px) {
    flex-direction: column;
  }

  @media (min-width: ) {
    min-width: 1200px;
  }
`

const TransitionContainer = styled.div`
  width: 100%;
  left: 20%;
  @media (max-width: 693px) {
    width: 100%;
    left: 0;
    height: auto;
  }

  @media (min-width: 1295px) {
    max-width: 1000px;
    width: 100%;
    left: 35%;
  }
`

const PageRender = styled.div`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 1.35rem;
  padding-left: 4rem;
  width: 78vw;
  overflow: hidden;
  overflow-y: scroll;
  background: ${props => props.theme.black};
  @media (max-width: 693px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1295px) {
    width: 100%;
  }
`

injectGlobal`
  body {
    font-family: sans-serif;
    background: blue;
    ${'' /* background: ${nightMode.black}; */}
  }
  * {
    transition: all 0.6s ease-in-out;
  }
  h1, h2, h3, h4, h5, p, a, ul, li {
    font-family: sans-serif;
    transition: color 0.3s ease-in-out;
    ${'' /* color: ${nightMode.blue}; */}
  }

  #___gatsby {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`

// import Global from './../components/Global'

// import { Children } from 'react';
// import { withTheme, injectGlobal } from 'styled-components';
//
// const Global = ({ theme, children }) => {
//   injectGlobal`
//     body {
//       background: ${({theme}) => theme.black};
//       background: ${props => props.theme.white};
//     }
//     h1, h2, h3, h4, h5, p, a, ul, li {
//       font-family: 'Open Sans Condensed', sans-serif;
//       color: ${props => props.theme.white};
//     }
//   `;
//   return Children.only(children);
// };

// export default withTheme(Global);

//* NAV */

const NavComp = styled.section`
  width: 20%;
  height: 100%;
  z-index: 666;
  background: ${props => props.theme.black};
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

@media (max-width: 414px) {
  box-sizing: border-box;
}
`

const NavMenu = styled(UL)`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 693px) {  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.white};
  }
`

const NavItem = styled(LI)`
  font-size: 18px;
  padding: 0.666em;
  font-family: 'Open Sans Condensed', Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  /* linear-gradient(to right, transparent, red 50%, transparent 90%, transparent) */
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
    color: ${props => props.theme.white};
  }
  @media (max-width: 693px) {
    padding: 0.1333em;
    margin: 0;
  }

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   padding-left: 1em;
   color: ${props => props.theme.black};
   background-position: 0 0;
    a {
      color: ${props => props.theme.black};
    }
     &:before {
     visibility: visible;
     -webkit-transform: scaleX(1);
     transform: scaleX(1);
    }
  }

  @-webkit-keyframes Gradient {
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  }

  @-moz-keyframes Gradient {
    0% {background-position: 0% 50% }
    50% {background-position: 100% 50% }
    100% {background-position: 0% 50% }
  }

  @keyframes Gradient {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`

const Emoji = styled.div`

width: 100%;
min-height: 60px;
height: auto;

.kitty-switch {
width: auto;
width: 100%;
display: block;
position: relative;
}
.kitty-switch .prompt {
display: inline-block;
margin-top: 10px;
}
.kitty-switch .well {
background: ${props => props.theme.black};
height: 20px;
width: 65px;
position: absolute;
right: 90px;
top: 7px;
border-radius: 10px;
box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.1);
border: 2px solid ${props => props.theme.blue};
cursor: pointer;
}
.kitty-switch #toggle {
opacity: 0;
border: none;
border-radius: 0;
outline: none;
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
height: 29px;
width: 140px;
width: 100%;
background: transparent;
position: absolute;
left: 0px;
top: 3px;
cursor: pointer;
z-index: 100;
color: tranparent;
}
.kitty-switch #toggle:after {
content: '';
background-color: transparent;
height: 40px;
width: 80px;
position: absolute;
left: 30px;
top: -5px;
}
.kitty-switch #toggle ~ div.kitty:before {
${'' /* content: "⚫️"; */}
content: '👽';
position: absolute;
right: 133.666px;
top: 11px;
font-size: 17px;
z-index: 1;
transition: all 1s ease-out;
}
.kitty-switch #toggle:checked {
right: 0px;
}
.kitty-switch #toggle:checked:after {
left: -80px;
}
.kitty-switch #toggle:checked ~ div.kitty:before {
  ${'' /* content: '⚪️'; */}
  content: '👔';
  top: 11px;
  right: 88px;
}
.kitty-switch #toggle:checked ~ div.visible {
opacity: 1;
max-height: 900px;
overflow: visible;
}
`

const DownloadPopup = styled.div`
  height: 333px;
  width: 333px;
  background: blue;
  position: fixed;
  top: 33.3%;
  left: 25%;
  z-index: 666;
  border: 2px solid white;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  height: ${props => props.visible ? null : '0px'};
  width: ${props => props.visible ? null : '0px'};
  transform: ${props => props.visible ? null : 'scale(0, 0) rotate(180deg)'};
  transform-origin: top right;
`

// class TransitionHandler extends React.Component {
//   shouldComponentUpdate (nextProps, nextState) {
//     return location.pathname === window.location.pathname
//   }
//
//   render () {
//     const {children} = this.props
//     return (
//       <TransitionContainer className='transition-container'>
//         {children}
//       </TransitionContainer>
//     )
//   }
// }

export default class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDark: true,
      theme: nightMode,
      shouldHide: false
    }
    this.handlePopUp = this.handlePopUp.bind(this)
  }
  static propTypes = {
   children: PropTypes.func,
 }

  handlePopUp () {
    this.setState(prevState => ({
      shouldHide: !prevState.shouldHide
    }))
  }
  HandleColorChange () {
    // Toggle day / night on click
    const isDark = !this.state.isDark

    this.setState({
      isDark: isDark,
      theme: isDark ? nightMode : lightMode
    })
  }
  render () {
    // const { children, location } = this.props
    return (
      <div>
      {/* <a onClick={this.onClick}>CLick</a> */}
      <ThemeProvider className='Theme' theme={this.state.theme}>
        <WrapLayout className='Nav-PageRender-Flex-Container Also-Wrap'>
    			<Helmet
    	      title='jimmyNames'
    	      meta={[
    	        { name: 'description', content: 'Jimmy Names' },
    	        { name: 'keywords', content: 'jimmy names, jimmyNames' },
    	      ]}
    	    />
          <DownloadPopup visible={this.state.shouldHide} />
        	{/* <Nav /> */}
          <NavComp className='Nav'>
            <PaddingMobile>
              <Link to='/' exact><Logo src={logo} /></Link>

              <NavMenu className='Menu'>
                <Link to='/about/'><NavItem>About.i</NavItem></Link>
                <Link to='/me/'><NavItem>Me.href</NavItem></Link>
                <Link to='/mycomputer/'><NavItem>Projects</NavItem></Link>
                <a onClick={() => this.handlePopUp()}><NavItem>Cv.dmg</NavItem></a>
              </NavMenu>

              <Emoji>
                <div className="kitty-switch" onClick={() => this.HandleColorChange()}>
                  <input type="checkbox" id="toggle" tabindex="1"></input>
                  <div className="kitty"></div>
                  <label for="toggle" className="well"></label>
                </div>
              </Emoji>

            </PaddingMobile>
          </NavComp>
    		  {/* <TransitionGroup>
    		    <CSSTransition
    		      key={location.pathname}
    		      classNames='example'
    		      timeout={{ enter: 666, exit: 333 }}
    		        >
    		      <TransitionHandler > */}
    		    			<PageRender id='page-wrap' className='PageRender'>

    		      			 {this.props.children()}
    		    			</PageRender>
    		      {/* </TransitionHandler>
    		    </CSSTransition>
    			</TransitionGroup> */}
      	</WrapLayout>
      </ThemeProvider>
      </div>
    )
  }
}

//
// const TemplateWrapper = ({ children, location }) => (
//   <ThemeProvider className='Theme' theme={theme}>
//     <WrapLayout className='Nav-PageRender-Flex-Container Also-Wrap'>
// 			<Helmet
// 	      title='jimmyNames'
// 	      meta={[
// 	        { name: 'description', content: 'Jimmy Names' },
// 	        { name: 'keywords', content: 'jimmy names, jimmyNames' },
// 	      ]}
// 	    />
//     	<Nav />
// 		  <TransitionGroup>
// 		    <CSSTransition
// 		      key={location.pathname}
// 		      classNames='example'
// 		      timeout={{ enter: 666, exit: 333 }}
// 		        >
// 		      <TransitionHandler location={location}>
// 		    			<PageRender id='page-wrap' className='PageRender'>
// 		      			<DownloadComp />
// 		      				{children()}
// 		    			</PageRender>
// 		      </TransitionHandler>
// 		    </CSSTransition>
// 			</TransitionGroup>
//   	</WrapLayout>
//   </ThemeProvider>
// )

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// }
//
// export default withRouter(TemplateWrapper)
