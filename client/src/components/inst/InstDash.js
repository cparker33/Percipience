import React, { Component } from 'react'
import '../../assets/styles/InstDash.css'
import {connect} from 'react-redux'
import {addRoomName} from '../../api/perci'

// import { browserHistory } from 'react-router';
// browserHistory.push('/some/path');


class InstDash extends Component {


  addRoomClick () {

    addRoomName()
  }


  render() {
    return (

      <div
        id='InstDashCont'>

        <h1
          id='InstDashHeader'>
          Dashboard
        </h1>
        <div
          id='currUser'>

         <p> {`Welcome ${this.props.user} ! `}</p> 

        </div>

        <div
          id='InstDashFrame'>

          
          <div
            id='AddRoomCont'
            onClick={this.addRoomClick}>

            <div>
            <img
              id='AddRoomImg' 
              alt='Plus'
              src={require('../../assets/images/plus.png')} />

            </div>

            <h2
              className='dashH2'>
              Create Room
            </h2>

          </div>


          <div
            id='AddNoteCont'>


            <img
              id='AddNoteImg' 
              alt='Plus'
              src={require('../../assets/images/plus.png')} />

            
            <h2
              className='dashH2'>
              Create Class Notes
            </h2>

            <input 
              id='AddNoteInp'
              type='text' 
              name='roomname'
              placeholder='Class Note Name'/>

          </div>

        </div>

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

     user: appState.user

  }

}


export default connect(mapStateToProps)(InstDash)



