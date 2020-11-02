const mongoose = require('mongoose');


const mongoUserSchema= mongoose.Schema({
    name:String,
    email:String
})

module.exports= new mongoose.model('User',mongoUserSchema)