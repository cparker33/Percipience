import React, { Component } from 'react'
import '../assets/styles/Main.css'
import {connect} from 'react-redux'
import LeftBar from './LeftBar'

class InstLogin extends Component {


  render() {
    return (

      <div
        id='InstLoginCont'>

      <LeftBar />

        <div
         id='LoginBox'>

          <form
             id='LoginForm'>

                <input 
                  id='usrName'
                  type='text' 
                  name='username' 
                  value='usernameState'
                  placeholder='Username'/>

                <input
                  id='pWord'
                  type='password'
                  name='password'
                  value='passwordState'
                  placeholder='Password' />

                <button
                  type='submit' >

                  Submit

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

export default connect(mapStateToProps)(InstLogin)



