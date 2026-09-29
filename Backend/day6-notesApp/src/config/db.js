
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/notes-app"); //using local database
        console.log('mongoDB connected');
    }
    catch(err){
        console.log('error which connecting db', err);
    }
}

module.exports=connectDB;