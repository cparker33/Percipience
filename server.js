const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// app.get("*", function(req, res){
//     res.sendfile(__dirname + '/client/public/index.html')
// })

// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })




io.on('connection', function(socket) {



  socket.on('getNumStud', function() {


    var nspSockets = io.of('/').sockets;

    var studCnt = Object.keys(nspSockets).length

    // console.log('STUD COUNT ', studCnt)

    io.emit('getNumStud', studCnt)


  })

  socket.on('addMessage', function(message) {

    io.emit('newMessage', message)

  })


  socket.on('addCompLvl', function(score) {

    io.emit('addCompLvl', score)

  })



  socket.on('addRoomName', function(roomId) {

    io.emit('addRoomName', roomId)

  })

  socket.on('addNewTopic', function(curr_topic) {

    io.emit('addNewTopic', curr_topic)

  })

  socket.on('addUserName', function(user) {

    io.emit('addUserName', user)

  })

  socket.on('updateGrph', function(gd) {

    io.emit('updateGrph', gd)

  })

//>>
})


server.listen(3001, function(){
    console.log('listening on port 3001')
})