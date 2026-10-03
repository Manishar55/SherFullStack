
import React, {useEffect, useState} from "react";
import axios from "axios";
import NoteCard from "./components/NotesCard";

const App = () => {

  const [formValues, setFormValues]= useState({
    title:"",
    description:"",
  });
  
  const [allNotes, setAllNotes] = useState([]);

  const handleChange =(e) =>{
    setFormValues((prev)=>({...prev, [e.target.name]:e.target.value}));
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // console.log(formValues);

    //api call
    let res = await axios.post("http://localhost:3000/notes/create", formValues);
    // console.log(res);
    
    setFormValues({
      title:"",
      description:"",
    });
  }

  const getAllNotes = async()=>{
    try{
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      // console.log(res);
      setAllNotes(res.data.data);
    }
    catch(err){
      console.log("error in getAllNotes api", err);
    }
  }
  useEffect(()=>{
    getAllNotes();
  }, []);

  return (
    <div className=" p-5 bg-blue-950">
      <h1 className="text-3xl font-semibold mb-3 text-white">Notes App</h1>

      <form onSubmit={handleSubmit} className="border flex flex-col w-100 p-4 gap-5 bg-blue-50 rounded mb-6" action="">
        <input 
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="p-5 border rounded"
          type="text" 
          placeholder="Title" 
        />
        <input
         minLength={10}
         onChange={handleChange}
         name="description"
         value={formValues.description}
         className="p-5 border rounded"
         type="text" 
         placeholder="description" 
        />

        <button className="bg-blue-700 p-2 rounded text-white">Add Note</button>

      </form>

      <div className="flex gap-4 flex-wrap justify-between">
        {
          allNotes.map((val)=>(
            <NoteCard key={val._id} note={val}/>
          ))
        }
      </div>
    </div>
  );
};

export default App;
