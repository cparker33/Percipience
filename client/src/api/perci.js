import io from 'socket.io-client'
import store from '../store'
import shortid from 'shortid'
import moment from 'moment'


// const socket = io.connect('http://localhost:3001')
// 10.68.0.107. 192.168.1.10
// const socket = io.connect('http://10.68.0.107:3001')
// const socket = io.connect('http://192.168.1.10:3001')
const socket =io.connect('http://10.68.0.60:3001')



export function getRoomName() {

  socket.emit('getRoomName')

}

socket.on('getRoomName', function(roomId) {

  store.dispatch({

    type: 'ADD_ROOM_NAME',
    roomId

  })
})



export function addCompLvl(score) {

  socket.emit('addCompLvl', score)
}


socket.on('addCompLvl', function(score) {

  store.dispatch({

    type: 'ADD_COMP_LVL',
    user_scale: score,

  })
})



export function addRoomName() {

  var roomId = shortid.generate()

  roomId = roomId.toUpperCase()

  socket.emit('addRoomName', roomId)

}


socket.on('addRoomName', function(roomId) {

  store.dispatch( {

    type: 'ADD_ROOM_NAME',
    room: roomId

  })
})


export function addNewTopic(curr_topic) {

  socket.emit('addNewTopic', curr_topic)

}


socket.on('addNewTopic', function(curr_topic) {

  store.dispatch( {

    type: 'ADD_ROOM_TOPIC',
    curr_topic

  })
})


export function addUserName(user) {

  store.dispatch( {

    type: 'ADD_USR_NAME',
    user

  })
}


export function addStudName(user) {

  store.dispatch( {

    type: 'ADD_STUD_NAME',
    user

  })
}


export function gathData(rtData) {

  socket.emit('gathTopDat', rtData)

}


socket.on('gathTopDat', function(cObj) {
  
  var mmnt = moment().format('LTS')

  var gTop = mmnt

  var gTopList = store.getState().tpc_list

  gTopList.splice(0, 1)

  gTopList.push(gTop)

  var gAvgList = store.getState().avg_list

  gAvgList.splice(0, 1)

  gAvgList.push(Number(cObj.avg))

  var csList = cObj.cList

  var ssList = cObj.sList


  store.dispatch( {
    type: 'GATH_AVG_DATA',
    gAvgList
  })

  store.dispatch( {
    type: 'GATH_TOP_DATA',
    gTop
  })

  store.dispatch ( {
    type: 'UPDATE_USR_GRAPH',
    csList
  })

  store.dispatch ( {
    type: 'UPDATE_USR_DATA',
    ssList
  })

  store.dispatch( {
    type: 'UPDATE_GRPH',
    gTopList
  })

})


// export function addUserType(is_inst) {

//   socket.emit('addUserType', is_inst)

// }


// socket.on('addUserType', function(is_inst) {

//   store.dispatch( {

//     type: 'ADD_USR_TYP',
//     is_inst

//   })
// })

//------------
// export function updateUserGraph(rtData) {


//   socket.emit('updateUserGraph', rtData)

// }


// socket.on('updateUserGraph', function(cObj) {

//   var csList = store.getState().cList
//   var ssList = store.getState().sList

//   console.log(csList, "api")

//   store.dispatch( {

//     type: 'UPDATE_USR_GRAPH',
//     csList,
//     ssList
    

//   })
// })
//------------


// export function updateGrph(gd) {

//   store.dispatch( {

//     type: 'UPDATE_GRPH',
//     gd

//     })
// }


// export function addUsers(users) {

//   socket.emit('addUsers', users)

// }


// socket.on('addUsers', function(users) {

//   store.dispatch( {

//     type: 'ADD_USERS',
//     users

//   })
// })


//------------

// export function getAvgForTopic() {

  

//   // var avg = 12

//   socket.emit('getNumStud')

//   // socket.emit('getAvgForTopic', avg)

// }


// socket.on('getNumStud', function(studCnt) {

//   store.dispatch( {

//     type: 'GET_AVG_SCORE',
//     studCnt

//   })
// })

//------------




















