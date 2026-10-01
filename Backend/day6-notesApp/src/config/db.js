
const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.mongodb_uri); //using local database
        console.log('mongoDB connected');
    }
    catch(err){
        console.log('error which connecting db', err);
    }
}

module.exports=connectDB;