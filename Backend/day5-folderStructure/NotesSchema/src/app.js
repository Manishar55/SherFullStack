
const express = require("express");
const notesModel = require("./models/notes.model");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();

app.get("/", (req, res)=>{
    res.send("welcome to the NOTES application....");
});

app.post("/create", async (req, res)=>{

    let { title, description }= req.body;

    //All mongoose operations will always return a promise
    const newNote= await notesModel.create({ //create is query in DB
        title,
        description,
    }); 

    res.send({
        success: true,
        message: "Note created successfully",
        data: newNote,
    });
});

module.exports=app;