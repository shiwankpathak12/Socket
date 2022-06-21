const express=require('express')
const ejs=require('ejs')

const app=express()
app.set('view engine','ejs')
//const port=process.env.PORT||1234
const server=require('http').createServer(app)
const io=require('socket.io')(server,{cors:{origin:"*"}})
app.get('/home',(req,res)=>{
    res.render('index')
})
server.listen(1234,()=>{
    console.log(`server is started at port `)
})

io.on('connection',(socket)=>{
    console.log('User connected: ' + socket.id)

    socket.on('message',(data)=>{
        socket.broadcast.emit('message',data)
    })
})