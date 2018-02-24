import React from 'react'
import styled from 'styled-components'
// import Draggable from 'react-draggable'


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
      <FooterElem visible={this.state.shouldHide}>
              <button onClick={this.onClick}>click me</button>
              <p className={this.state.shouldHide ? 'hidden' : ''} >yoyoyoyoyo</p>
      </FooterElem>

    )
  }
}
