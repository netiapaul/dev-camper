const mongoose = require('mongoose');

const bootCampSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"please add a name"],
        unique:true,
        trim:true
    },
    slug: String,
    description: {
        type:String,
        required: [true,"please add a name"],
        unique:true,
        trim:true
    }
})