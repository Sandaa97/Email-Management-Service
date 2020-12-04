const mongoose = require('mongoose');

const URI= "mongodb+srv://dbUser:dbUser@cluster0.1knjm.mongodb.net/EmailManagementServiceDB";

const connectDB = async()=>{
    await mongoose.connect(URI,{ 
        useNewUrlParser: true ,
        useUnifiedTopology: true
     });
     
    console.log('DB connected..!');
}

module.exports = connectDB;