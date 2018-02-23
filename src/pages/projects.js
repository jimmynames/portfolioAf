import React from 'react'
import styled from 'styled-components'

import ProjectFolderComp from './../components/ProjectFolders'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  @media (max-width: 616px ) {
    height: 75vh;
  }

  h1, p {
    color: white;
    width: 50%;
  }

  h1 {
    margin-top: 0;
  }
`

export default class Projects extends React.Component {
  render () {
    return (
      <Page>
        <h1>Projects</h1>
        <p>Whilst the majority of my <strong>most recent</strong> code has been written at Ruin.Studio here's a few selected works from my freelance and for fun</p>
        <ProjectFolderComp />
      </Page>
    )
  }
}
