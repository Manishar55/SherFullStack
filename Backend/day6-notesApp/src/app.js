
const express = require("express");
const notesModel = require("./models/notes.model");
const connectDB= require('./config/db');
const createNotesController = require("./controllers/notes.controller");
const notesRoute = require('./routes/notes.route');

const app=express();
app.use(express.json());
connectDB();

app.get('/', (req, res)=>{ //controller
    res.send("welcome");
});

// app.post('/create', async(req, res)=>{
//     try{
//         let {title, description} = req.body;
        
//         //creation
//         let newNote = await notesModel.create({ //create is a query
//             title,
//             description,
//         });

//         //we have send the note in response
//         return res.status(201).json({ //json is a method which will send json data
//             message:"Note created succesfully",
//             data: newNote,
//         });
//     }
//     catch(error){
//         console.log('error occured in creation', error);
//     }
// });

//now the above is present at notes.controller.js -> created to write logics there

// app.post('/create', createNotesController); //now this code is at notes.route.js

app.use('/notes', notesRoute); // '/notes' path par ek page link kiye h

module.exports=app; //using common js

//MVC
//app.js 
// const notesRoute = require('./routes/notes.route')       notes.route.js                                          notes.controller.js
//app.use('/notes', notesRoute)                     <------ router.post('/create', createNotesController); <------  logic{...}
//                                                          module.exports=router;                                  module.exports = createNotesController;
