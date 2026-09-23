
const express = require("express");
const mongoose = require("mongoose");

// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

//All mongoose operations will always return a promise
const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://manisharana02005_db_user:s62OBZmYsAnk0pWi@shercluster0.opsjyus.mongodb.net/");
        console.log('MongoDB connected');
    }
    catch(error){
        console.log('error while connecting db', error);  
    }
}
connectDB();


app.get('/', (req, res)=>{
    res.send("Welcome...");
})

app.listen(3000, ()=>{
    console.log("app is ruuning on port 3000");
});















