import React from 'react'
import styled from 'styled-components'

import SlideshowComp from './../components/Slider'

import welcome from './../gif/welcome.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width: 616px ) {
    height: 75vh;
  }
`

const Welcome = styled.img`
  height: 100%;
  width: 100%;
  z-index: 1;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <SlideshowComp />
        {/* <Welcome src={welcome} /> */}
      </Page>
    )
  }
}
