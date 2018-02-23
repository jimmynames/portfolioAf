import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const FolderHolder = styled.div`
   position: relative;
   float: left;
   margin: 30px;
   -webkit-transform: rotateY(-15deg);
   /* Safari */
   transform: rotateY(-15deg);
   transform-style: preserve-3d;

   &:hover {
     img {
         top: -50px;
       }

      p {
        color: blue;
      }
     }
`
// .folder-holder a:hover .project-image {
//    top: -50px;
// }

// .folder-holder a:hover .folder-close {
//    transform: rotateX( -25deg);
//    box-shadow: 0 7px 5px -2px gray;
// }

const FolderImage = styled.img`
   width: 150px;
   z-index: 1;
`

const ProjectImage = styled.img`
  position: absolute;
  width: 134px;
  left: 50%;
  margin-left: -67px;
  z-index: 5;
  top: 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
`

const FolderClose = styled.div`
  position: absolute;
  width: 150px;
  height: 80px;
  right: 2px;
  background: #ffcc66;
  border-radius: 10px;
  top: 26px;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom center;
  box-shadow: 0 4px 2px -2px blue;
  transform: rotateX( -5deg);
  &:hover {
    top: 26px !important;
    transform: rotateX( -25deg);
    box-shadow: 0 7px 5px -2px blue;
  }
`

const FolderCloseP = styled.p`
 position: absolute;
 width: 86%;
 text-align: left;
 left: 11px;
 color: #4d3300;
 font-size: 18px;
`

const FolderCloseDate = styled.p`
  position: absolute;
  width: 100%;
  text-align: left;
  left: 20px;
  color: #4d3300;
  bottom: -10px;
  font-size: 14px;
`

export default class FolderComp extends React.Component {
  render () {
    return (
      <FolderHolder class='folder-holder'>
        <Link to={this.props.projectLink}>
          <FolderImage class='folder-holder-img' src='https://s32.postimg.org/wrg0pwfpt/folder_top.png' />
          <ProjectImage class='project-image' src={this.props.src} srcSet={this.props.src + ' 1x, ' + this.props.src2x + ' 2x'} />
          <FolderClose class='folder-close'>
            <FolderCloseP>{this.props.projectTitle}</FolderCloseP>
            <FolderCloseDate class='date'>{this.props.info}</FolderCloseDate>
          </FolderClose>
        </Link>
      </FolderHolder>
    )
  }
}
