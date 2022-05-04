const mongoose = require('mongoose');

const Speciality = mongoose.Schema({

    name:{type:String, required:[true, 'Name is required']},
   
})
module.exports = mongoose.model('Speciality', Speciality);