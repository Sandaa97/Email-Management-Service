const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const URI= "mongodb+srv://dbUser:dbUser@cluster0.1knjm.mongodb.net/EmailManagementServiceDB";


connectDB();
const port = process.env.Port || 2010;

app.use(express.json());

const emailRouter = require('./routes/emails');
app.use('/v1/emails',emailRouter);


app.listen(port, ()=> {
    console.log(`[Server ] The port is running on : ${port}`);
    console.log(`[Server ] Base URI = ${URI}`);   
});

