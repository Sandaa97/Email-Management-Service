const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
const port = process.env.Port || 2010;

app.use(express.json());

const emailRouter = require('./routes/emails');
app.use('/emails',emailRouter);


app.listen(port, ()=> console.log(`The port is running on : ${port}`)); 