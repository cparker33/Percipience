import React, { Component } from 'react'
import '../../assets/styles/StudentDash.css'
import {connect} from 'react-redux'


class StudentDash extends Component {


  render() {

    return (

    	<div
        id='studentDashCont'>

          <h1 
            id='studentDashTitle'> 

              Student Dashboard

          </h1>

        <div
         id='studentDashBox'>

          <form
             id='studentDashForm'>

                <div 
                  id='rmNameLbl'>

                  <label
                    htmlFor='roomname'>

                      Room Name

                  </label>

                </div>

                <input
                  id='rmName' 
                  type='text' 
                  name='roomname' 
                  placeholder='Room Name'/>

                <button
                  id='rmButton' >

                    Enter Room

                </button>

                <button
                  id='clssNotesButton' >

                     Class Notes Link

                </button>

            </form>

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

export default connect(mapStateToProps)(StudentDash)
