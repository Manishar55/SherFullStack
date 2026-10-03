
const express = require("express");
const connectDB= require('./config/db');
const notesRoute = require('./routes/notes.route');
const cors = require("cors");

const app=express();
app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);

connectDB();
app.use(express.json());

app.get('/', (req, res)=>{ //controller
    res.send("welcome");
});

app.use('/notes', notesRoute); 

module.exports=app; //using common js

