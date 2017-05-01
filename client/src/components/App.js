import React, { Component } from 'react'
import '../assets/styles/App.css'
import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'
import LeftBar from './LeftBar'
import Main from './Main'
import InstDash from './inst/InstDash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addMessage(this.state.message)
    this.setState({
      message:''
    })
  }

  render() {
    return (
      <div>

        <LeftBar />
        <Main />
        <InstDash />

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} />
          <button type="submit">Send</button>
        </form>
        <div id="messages">
          <ul>
            {this.props.messages.map((message, i)=>(
              <li key={'message' + i}>{message}</li>
            ))}
          </ul>
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

export default connect(mapStateToProps)(App)