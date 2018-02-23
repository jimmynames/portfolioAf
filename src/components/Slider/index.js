import React from 'react'
import styled from 'styled-components'

const Slideshow = styled.div`
  position: relative;
  overflow: hidden;
  height: 50px;
`

const SlideshowContent = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  animation: slideshow 20s linear infinite;
  margin: 0;
  line-height: 50px;
  font-size: 46px;
  font-family: 'Open Sans Condensed', sans-serif;
  color: white;
  opacity: 0.1;
  @keyframes slideshow {
    0%    { left: 0; }
    100%  { left: -200%; }
  }
`

export default class SlideshowComp extends React.Component {
  render () {
    return (
      // <SlideshowAbsolute>
        <Slideshow>
          <SlideshowContent>welcome to my website, please enjoy your stay
          </SlideshowContent>
        </Slideshow>
      // </SlideshowAbsolute>
    )
  }
}
