
const express = require("express");
const notesModel = require("./models/notes.model");
const connectDB= require('./config/db')

const app=express();
app.use(express.json());
connectDB();

app.get('/', (req, res)=>{ //controller
    res.send("welcome");
});

app.post('/create', async(req, res)=>{
    try{
        let {title, description} = req.body;
        
        //creation
        let newNote = await notesModel.create({ //create is a query
            title,
            description,
        });

        //we have send the note in response
        return res.status(201).json({ //json is a method which will send json data
            message:"Note created succesfully",
            data: newNote,
        });
    }
    catch(error){
        console.log('error occured in creation', error);
    }
});


module.exports=app; //using common js