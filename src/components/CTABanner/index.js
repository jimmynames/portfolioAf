import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const CTABannerComp = styled.section`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
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

export default class CTABanner extends React.Component {
  render () {
    return (
      <div>
        <CTABannerComp weblink={this.props.weblink} codelink={this.props.codelink}>
          <Link to='/mycomputer'>🔙 Projects</Link>
          ${(this.props.weblink) ? <a href={this.props.weblink} rel='noopener' target='_blank'>🌐 Website</a> : null }
          ${(this.props.codelink) ? <a href={this.props.codelink} rel='noopener' target='_blank'>💾 Code</a> : null }
        </CTABannerComp>
      </div>
    )
  }
}
