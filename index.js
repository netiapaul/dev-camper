const express = require('express');
const dotenv = require('dotenv');
// Load env 
dotenv.config({path: './config/.env'});
const PORT = process.env.PORT || 4200;

const app = express();

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})