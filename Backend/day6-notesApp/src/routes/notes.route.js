
const express = require('express');
const {createNotesController, getAllNotesController} = require('../controllers/notes.controller');

const router = express.Router();

//router creates routes-> now we have created a page
router.post('/create', createNotesController); //now for creating a post req we have to use "http://localhost:3000/notes/create"
router.get('/allNotes', getAllNotesController); // '/notes' route has two sub routes -> "http://localhost:3000/notes/allNotes"

module.exports=router;