const mongoose = require('mongoose');

const Admin = mongoose.Schema({

    email:{type:String, required:[true, 'Email is required']},
    password:{type:String, required:[true, 'Password is required']},
   
})
module.exports = mongoose.model('Admin', Admin);