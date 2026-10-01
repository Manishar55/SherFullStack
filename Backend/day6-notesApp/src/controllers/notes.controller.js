const notesModel = require("../models/notes.model");

const createNotesController=  async(req, res)=>{
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
};

const getAllNotesController = async(req, res)=>{
    try{
        const allNotes = await notesModel.find();

        res.status(200).json({
            message: "All notes fetched",
            data: allNotes,
        });
    }
    catch(err){
        console.log('error in get notes api', err);
    }
};

const getSingleNoteController = async(req, res) => {

    try{
        let noteId = req.params.id;
        let note= await notesModel.findById(noteId);

        res.status(200).json({
            message: "Note fetched successfully",
            data:note,
        });
    }
    catch(err){
        console.log("err is single note api", err);  
    }
};

module.exports = {
    createNotesController, 
    getAllNotesController,
    getSingleNoteController,
};
