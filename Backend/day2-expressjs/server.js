let http = require("http");

//creating server with the help of http
let server = http.createServer((req, res)=>{
    if(req.url=='/users'){
        res.end("server is running for user");
    }

    if(req.url=='/home'){
        res.end("server is running for home");
    }

     if(req.url=='/cart'){
        res.end("server is running for cart");
    }
    //this is the Normal http method to create server - to shortout this repeatative problem we have express.js
})

server.listen(3000, ()=>{
    console.log('node Server is running on port 3000');
})


//---------------------Express code------------------------------------------------

const express = require("express");
const app= express();

app.get("/", (req, res)=>{
    res.send("express is running....")
});

app.listen(4000, ()=>{
    console.log('Express Server is running on port 4000');
});