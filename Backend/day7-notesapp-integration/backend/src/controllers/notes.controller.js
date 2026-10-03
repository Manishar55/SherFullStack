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
         return res.status(500).json({
            message: "Internal server error",
        });
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
        console.log("err in single note api", err);  
    }
};

//PUT
const updateNotesController = async(req, res)=>{
    try{
        let noteId = req.params.id;
        let body = req.body;
        let updatedNote = await notesModel.findByIdAndUpdate(noteId, body, {new:true}); //{new:true} used to send the updated data in response

        return res.status(200).json({
            message: "note updated successfully",
            data: updatedNote,
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

const deleteNotesController = async (req, res)=>{
    try{
        let noteId = req.params.id;

        await notesModel.findByIdAndDelete(noteId);

        return res.status(200).json({
            message: "Note deleted successfully",
            // data: note,
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

//PATCH
const singleEntityUpdateController= async(req, res)=>{
    try{
        let noteId = req.params.id;
        let body=req.body;

        let updatedNote = await notesModel.findByIdAndUpdate(noteId, body, {new:true});

        return res.status(200).json({
            message: "notes updated successfully",
            data: updatedNote,
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}


module.exports = {
    createNotesController, 
    getAllNotesController,
    getSingleNoteController,
    updateNotesController,
    deleteNotesController, 
    singleEntityUpdateController,
};
