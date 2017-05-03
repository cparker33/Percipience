import React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'
import {addUserName} from '../../api/perci'
import {Link} from 'react-router-dom'


class InstLogin extends Component {

  handleSubmit() {

    var i = document.getElementById('usrName').value

    addUserName(i) 

  }
 
  render() {

    return (

      <div
        id='InstLoginCont'>

          <h1 
            id='loginTitle'> 

              Please Provide Your Login Information

          </h1>

        <div
          id='loginBox'>

              <label 
                  htmlFor='username'>                   

                    Username:

              </label>

          </div>  

                <input
                  id='usrName'
                  type='text' 
                  placeholder='username' 
                  autoComplete='off' />

              <div 
                  id='pWordLbl'> 

                  <label
                    htmlFor='password'>

                      Password:<br />
                      password should be at least 6 characters

                  </label>

              </div> 

                  <input
                    id='pWord'
                    type='password'                    
                    autoComplete='off' />

                 <Link
                    to={'/instDash/'}>

                <div
                  onClick={this.handleSubmit}
                  id='loginButton'>

                  Submit

                </div>

            </Link>

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



