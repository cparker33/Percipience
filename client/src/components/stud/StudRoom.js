import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import { addCompLvl } from '../../api/perci'


class StudRoom extends Component {

  constructor() {

    super()

    this.state = {

    }
  }

  slideChange () {

    var c = document.getElementById('StudRoomSlide').value

    document.getElementById('tstId').innerHTML = (c)
    
    document.getElementById('StudRoomSlide').value = (c)

  }

  submitClick() {


    console.log('subClick')
    var c = document.getElementById('StudRoomSlide').value

    addCompLvl(c)

  }


  render() {

    return (

      <div
        id='StudRoomCont'>

        <div
          id='StudRoomTopBar'>

          <h1
            id='StudRoomTopic'>
            {this.props.topic}
          </h1>

        </div>

        <div
          id='StudRoomForm'>

          <h2
            id='StudRoomRateH2'>Rate your comprehension</h2>

          <p id='tstId'></p>

          <div
            id='StudRoomSlideCont'>


            
            <div>

              <p>0</p>

            </div>

            <input 
              id="StudRoomSlide" 
              onChange={this.slideChange}
              type="range" 
              min="0" 
              max="10" 
              step="1" />

            <div>

              <p>10</p>

            </div>

          </div>

          <div
            id='StudRoomSbmtBtn'
            onClick={this.submitClick}>
            Submit
          </div>

        </div>

     

        <div
          id='StudRoomUserCont'>
          {this.props.user}
        </div>


        <div
          id='StudRoomRoomCont'>
          {this.props.room}
        </div>

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  // console.log(appState)

  return {

    user: appState.user,
    room: appState.room,
    topic: appState.topic

  }

}


export default connect(mapStateToProps)(StudRoom)



