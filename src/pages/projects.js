import React from 'react'
import styled from 'styled-components'

import FolderComp from './../components/Folder'

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
    width: 50%;
  }

  h1 {
    margin-top: 0;
  }
`

const ProjectFolders = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-flex-start;
  padding-top: 80px;
`

export default class Projects extends React.Component {
  render () {
    return (
      <Page>
        <h1>Projects</h1>
        <p>Whilst the majority of my <strong>most recent</strong> code has been written at Ruin.Studio here's a few selected works from my freelance and for fun</p>
        <ProjectFolders>
          <FolderComp projectTitle='Aural Youth' info='' projectLink='/projects/auralyouth' src='' src2x='' />
          <FolderComp projectTitle='SR Design' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Ruin.studio Works' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Legends Barber' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='LEFT' info='' src='' projectLink='#' src2x='' />
          <FolderComp projectTitle='Digital Zine[0]' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Checkm8s.net' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Codepen Experiments' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='First Website Lel' info='' projectLink='#' src='' src2x='' />
        </ProjectFolders>
      </Page>
    )
  }
}
