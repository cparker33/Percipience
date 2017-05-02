import React, { Component } from 'react'
import '../../assets/styles/StudentDash.css'
import {connect} from 'react-redux'


class StudentClassNotes extends Component {


  render() {

    return (

    	<div 
    		id='classNotesCont'>

       <h2 
        id='classNoteTitle'>

          Class Note Title 

        </h2>

        <p>

          Lorem40

        </p>

        <p>

          Lorem40
          
        </p>

      </div>
    	)

    }
    
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(StudentClassNotes)
