const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req,res) => {

})

app.get('/:room', (req,res) => {
    
})

server.listen(5000, () => {
    console.log('s