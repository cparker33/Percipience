import io from 'socket.io-client'
import store from '../store'
import shortid from 'shortid'
// 10.68.0.107
const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})



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

export function addNewTopic(topic) {

  socket.emit('addNewTopic', topic)

}


socket.on('addNewTopic', function(topic) {

  store.dispatch( {

    type: 'ADD_ROOM_TOPIC',
    topic

  })
})


