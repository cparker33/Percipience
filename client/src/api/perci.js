import io from 'socket.io-client'
import store from '../store'
import shortid from 'shortid'

const socket = io.connect('http://localhost:3001')
// 10.68.0.107. 192.168.1.10
// const socket = io.connect('http://10.68.0.107:3001')
// const socket = io.connect('http://192.168.1.10:3001')

//------------

export function addCompLvl(score) {

  socket.emit('addCompLvl', score)
}


socket.on('addCompLvl', function(score) {

  store.dispatch( {

    type: 'ADD_COMP_LVL',
    user_scale: score

  })
})

//------------

//------------

export function addRoomName() {

  const roomId = shortid.generate()
  socket.emit('addRoomName', roomId)
}


socket.on('addRoomName', function(roomId) {

  store.dispatch( {

    type: 'ADD_ROOM_NAME',
    room: roomId

  })
})

//------------ 

//------------

export function addNewTopic(curr_topic) {

  socket.emit('addNewTopic', curr_topic)

}


socket.on('addNewTopic', function(curr_topic) {

  store.dispatch( {

    type: 'ADD_ROOM_TOPIC',
    curr_topic

  })
})

//------------

//------------

export function addUserName(user) {

  socket.emit('addUserName', user)

}


socket.on('addUserName', function(user) {
  console.log(user, 'user')
  store.dispatch( {

    type: 'ADD_USR_NAME',
    user

  })
})

//------------

//------------

export function addUserType(is_inst) {


  socket.emit('addUserType', is_inst)

}


socket.on('addUserType', function(is_inst) {

  store.dispatch( {

    type: 'ADD_USR_TYP',
    is_inst

  })
})

//------------


