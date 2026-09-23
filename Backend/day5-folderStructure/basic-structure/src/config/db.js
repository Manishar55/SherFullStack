const { default: mongoose } = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://manisharana02005_db_user:s62OBZmYsAnk0pWi@shercluster0.opsjyus.mongodb.net/"
        )
        console.log('MongoDB connected');
    }
    catch{
        console.log('error while connecting db', error);
    }
}

module.exports= connectDB;