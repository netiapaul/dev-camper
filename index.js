const express = require('express');
const dotenv = require('dotenv');
// Route Files
const  bootcamps = require('./routes/bootcamps');
// Load env 
dotenv.config({path: './config/.env'});
const PORT = process.env.PORT || 4200;

const app = express();

// Mount Routers
app.use('/ai/v1/bootcamps',bootcamps)


app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});