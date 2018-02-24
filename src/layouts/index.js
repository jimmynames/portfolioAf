require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Nav from './../components/Nav'
import DownloadComp from './../components/Download'

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
  background: lightyellow;
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

        <Nav />

        <TransitionGroup>
          <CSSTransition
              key={location.pathname}
              classNames="example"
              timeout={{ enter: 666, exit: 333 }}
            >
              <TransitionHandler location={location}>

        <PageRender id="page-wrap" className='PageRender'>
          <DownloadComp />
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
