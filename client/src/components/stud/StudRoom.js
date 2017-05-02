import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'


class StudRoom extends Component {

  constructor() {

    super()

    this.state = {

      cNum: '0'

    }
  }

  slideChange () {

    var c = document.getElementById('StudRoomSlide').value

    document.getElementById('tstId').innerHTML = (c)
    
    document.getElementById('StudRoomSlide').value = (c)

  }


  render() {

    return (

      <div
        id='StudRoomCont'>

        <div
          id='StudRoomTopBar'>

          <h1
            id='StudRoomTopic'>
            Topic
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
            id='StudRoomSbmtBtn'>
            Submit
          </div>

        </div>

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    messages: appState.messages

  }

}


export default connect(mapStateToProps)(StudRoom)



