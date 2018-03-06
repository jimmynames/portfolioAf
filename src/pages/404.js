import React from 'react'
import styled from 'styled-components'
import { Wrap } from './../components/Wrap'

import notfoundgif from './../gif/notfound.gif'

const Four = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: black;
`

const Oh = styled.h1`
  font-size: 166.6px;
  color: white;
  font-family: sans-serif;
`

const John = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
`

export default class FourOhFour extends React.Component {
  render () {
    return (
      <Four>
        <Wrap>
          <Oh>404</Oh>
          <John src={notfoundgif} alt='OhNo' />
        </Wrap>
      </Four>
    )
  }
}
