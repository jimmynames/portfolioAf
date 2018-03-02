import React from 'react'
import styled from 'styled-components'

import FolderComp from './../components/Folder'

import ay1 from './../images/projects/auralyouth/ay1.png'
import spr1 from './../images/projects/srdesign/spr3.png'
import le1 from './../images/projects/left/le1.png'
import jb1 from './../images/projects/zine/jb3.png'
import cp1 from './../images/projects/codepen/cp1.png'

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
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 80px;
  align-content: flex-start;
  justify-content: flex-start;
`

export default class Projects extends React.Component {
  render () {
    return (
      <Page>
        <h1>Projects</h1>
        <p>Whilst the majority of my <i>most frequent</i> code has been written at <A href='https://ruin.studio' rel='noopener' target='_blank'>Ruin.Studio</A> here's a few selected works from my freelance and/or for projects/sites built for fun</p>
        <ProjectFolders fire={this.props.fire}>
          <FolderComp fire projectTitle='Aural Youth' info='' projectLink='/projects/auralyouth' src={ay1} src2x='' />
          <FolderComp fire projectTitle='SR Design' info='' projectLink='/projects/seanryan' src={spr1} src2x='' />
          <FolderComp projectTitle='LEFT' info='' projectLink='/projects/left' src={le1} src2x='' />
          <FolderComp projectTitle='Digital Zine[0]' info='' projectLink='/projects/zine' src={jb1} src2x='' />
          <FolderComp projectTitle='Codepen Experiments' info='' projectLink='/projects/codepen' src={cp1} src2x='' />
        </ProjectFolders>
      </Page>
    )
  }
}
