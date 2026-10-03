
const mongoose = require("mongoose");

//creating schema
const notesSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        minlength: [10, "enetr minimum 10 chars"],
    },  
});

//creating model
const notesModel=mongoose.model("notes", notesSchema);
module.exports=notesModel;