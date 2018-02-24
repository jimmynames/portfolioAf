import React from 'react'
import styled from 'styled-components'

import SlideshowComp from './../components/Slider'
import DraggableComp from './../components/Draggable'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 616px ) {
    height: 75vh;
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <SlideshowComp />
        <DraggableComp />
      </Page>
    )
  }
}
