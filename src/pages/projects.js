import React from 'react'
import styled from 'styled-components'

import SlideshowComp from './../components/Slider'
import ProjectFolderComp from './../components/ProjectFolders'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 616px ) {
    height: 75vh;
  }
`

export default class Projects extends React.Component {
  render () {
    return (
      <Page>
        <ProjectFolderComp />
      </Page>
    )
  }
}
