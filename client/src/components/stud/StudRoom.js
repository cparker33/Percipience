import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import { gathData } from '../../api/perci'
import StudentGraph from '../charts/studentGraph'


class StudRoom extends Component {

  constructor(props) {

    super(props)

    this.state = {

      user: '',

      value: 0


    }
    this.slideChange = this.slideChange.bind(this)
  }


  slideChange (event) {

    var c = document.getElementById('StudRoomSlide').value

    document.getElementById('StudRoomSlideNum').innerHTML = (c)
    
    this.setState({
      value: event.target.value

    })

  }



  rtd = setInterval( ()=> { 

    var c = Number(document.getElementById('StudRoomSlide').value)


      gathData({
        user: this.props.user,
        comp: c,
        topic: this.props.curr_topic

      })

  }, 1000);

  

  render() {


    

    return (

      <div
        id='StudRoomCont'>

        <div
          id='StudRoomTopBar'>

          <h1
            id='StudRoomTopic'>
            {this.props.curr_topic}
          </h1>

        </div>

        <div
          id='StudRoomForm'>

          <h2
            id='StudRoomRateH2'>Rate your comprehension of the above topic.</h2>

          <p id='StudRoomSlideNum'>10</p>

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

          

        </div>

     
        <div
          id='userRoomCont'>

            <div
              id='StudRoomUserCont'>
              Username: {this.props.user}
            </div>


            <div
              id='StudRoomRoomCont'>
              Room Name:  {this.props.room}
            </div>

          </div>

        <StudentGraph />

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    user: appState.stud_user,
    room: appState.room,
    curr_topic: appState.curr_topic
  }

}


export default connect(mapStateToProps)(StudRoom)



