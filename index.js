const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const mongoose = require('mongoose');
// Route Files
const  bootcamps = require('./routes/bootcamps');
// Load env 
dotenv.config({path: './config/.env'});
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('App connected and running')
})

const PORT = process.env.PORT || 4200;

const app = express();

// Body Parser
app.use(express.json())

if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps',bootcamps)


app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});