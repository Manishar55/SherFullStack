
const mongoose = require("mongoose");

//using new keyword because Schema is a class in mongoose which creates schemas and we are creating object of that class
let notesSchema = new mongoose.Schema({ //creating schema
    // title: String,

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
    },
});

//then we'll create model of this schema to create collection in the mongoDB
const notesModel = mongoose.model('notes', notesSchema); //(collection name, schema name) //creating model with the help of mongoose
module.exports=notesModel;