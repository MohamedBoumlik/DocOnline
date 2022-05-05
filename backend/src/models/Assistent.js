const mongoose = require('mongoose');

const Assistent = mongoose.Schema({

    email:{type:String, required:[true, 'Email is required']},
    name:{type:String, required:[true, 'Name is required']},
    password:{type:String, required:[true, 'Password is required']},
   
})
module.exports = mongoose.model('Assistent', Assistent);