
const express = require('express');
const {createNotesController, getAllNotesController, getSingleNoteController, updateNotesController} = require('../controllers/notes.controller');

const router = express.Router();

//router creates routes-> now we have created a page
router.post('/create', createNotesController); //now for creating a post req we have to use "http://localhost:3000/notes/create"
router.get('/allNotes', getAllNotesController); // '/notes' route has two sub routes /notes/create &-> "http://localhost:3000/notes/allNotes"
router.get('/:id', getSingleNoteController);
router.put('/:id', updateNotesController);

module.exports=router;