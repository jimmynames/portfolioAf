import React from 'react'
import styled from 'styled-components'

import FolderComp from './../components/Folder'

import ay1 from './../images/projects/auralyouth/ay1.png'

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

const A = styled.a`
position: relative;
text-decoration: none;
padding: 5px;
&:after {
  position: absolute;
  content: '';
  height: 2px;
  bottom: 5px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  background: blue;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

&:hover {
  &:after {
    height: 100%;
    bottom: 0;
    z-index: -1;
  }
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
        <p>Whilst the majority of my <i>most recent</i> code has been written at <A href='https://ruin.studio' rel='noopener' target='_blank'>Ruin.Studio</A> here's a few selected works from my freelance and for fun</p>
        <ProjectFolders fire={this.props.fire}>
          <FolderComp fire projectTitle='Aural Youth' info='' projectLink='/projects/auralyouth' src={ay1} src2x='' />
          <FolderComp fire projectTitle='SR Design' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='LEFT' info='' src='' projectLink='#' src2x='' />
          <FolderComp fire projectTitle='Digital Zine[0]' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Checkm8s.net' info='' projectLink='#' src='' src2x='' />
          <FolderComp fire projectTitle='Codepen Experiments' info='' projectLink='#' src='' src2x='' />
          <FolderComp projectTitle='Legends Barber' info='' projectLink='#' src='' src2x='' />
        </ProjectFolders>
      </Page>
    )
  }
}
