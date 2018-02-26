import React from 'react'
import Draggable from 'react-draggable'

// const DraggableContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//
//   div {
//     padding: 1em;
//   }
//
//   img {
//     user-select: none;
//   }
// `

export default class DraggableComp extends React.Component {
  // constructor () {
  //   super()
  // }
  // componentWillMount = () => {
  //     var number = Math.floor((Math.random() * 666) + 1)
  //     console.log ('number>>', number)
  //     return number
  // }
  Random () {
    var number = Math.floor((Math.random() * 666) + 1)
    console.log('number>>', number)
    return number
  }
  render () {
    return (
      <Draggable bounds='parent'>
        <div style={{position: 'absolute', zIndex: this.props.zIndex, bottom: this.Random(), right: this.Random()}}>
          <img src={this.props.src} draggable='false' />
        </div>
      </Draggable>
    )
  }
}
