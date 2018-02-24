import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

import chains from './../../gif/chains.gif'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  div {
    padding: 1em;
  }

  img {
    user-select: none;
  }
`

const Random = () => {
  return (Math.floor((Math.random() * 100) + 1))
}

export default class DraggableComp extends React.Component {
  render () {
    return (
      <Container>
        <Draggable bounds='parent' style={{position: 'absolute', bottom: Random(), right: Random()}}>
            <img src={chains} draggable='false' />
        </Draggable>
      </Container>
    )
  }
}
