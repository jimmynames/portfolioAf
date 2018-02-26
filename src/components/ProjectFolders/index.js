import React from 'react'
import styled from 'styled-components'

import FolderComp from './../../components/Folder'

import skel from './../../gif/skel.gif'

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

export default class ProjectFoldersComp extends React.Component {
  render () {
    return (
      <ProjectFolders>
        <FolderComp projectTitle='Aural Youth' info='' projectLink='#' src={skel} src2x='' />
        <FolderComp projectTitle='SR Design' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='Ruin.studio Works' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='Legends Barber' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='LEFT' info='' src='' projectLink='#' src2x='' />
        <FolderComp projectTitle='Digital Zine[0]' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='Checkm8s.net' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='Codepen Experiments' info='' projectLink='#' src='' src2x='' />
        <FolderComp projectTitle='First Website Lel' info='' projectLink='#' src='' src2x='' />
      </ProjectFolders>
    )
  }
}
