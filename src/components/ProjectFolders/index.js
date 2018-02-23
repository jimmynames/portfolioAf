import React from 'react'
import styled from 'styled-components'

import FolderComp from './../../components/Folder'

const ProjectFolders = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
`

export default class ProjectFoldersComp extends React.Component {
  render () {
    return (
      <ProjectFolders>
        <FolderComp projectTitle='Aural Youth' info='' src='' src2x='' />
        <FolderComp projectTitle='SR Design' info='' src='' src2x='' />
        <FolderComp projectTitle='Ruin.studio Works' info='' src='' src2x='' />
        <FolderComp projectTitle='Legends Barber' info='' src='' src2x='' />
        <FolderComp projectTitle='LEFT' info='' src='' src2x='' />
        <FolderComp projectTitle='Codepen Experiments' info='' src='' src2x='' />
        <FolderComp projectTitle='Digital Zine[0]' info='' src='' src2x='' />
        <FolderComp projectTitle='First Website Lel' info='' src='' src2x='' />
      </ProjectFolders>
    )
  }
}
