const mongoose = require('mongoose');

const Doctor = mongoose.Schema({

    name:{type:String, required:[true, 'Name is required']},
    // speciality:{type:mongoose.Schema.Types.ObjectId,ref:'Speciality',required:[true, 'Speciality is required']},
   
})
module.exports = mongoose.model('Doctor', Doctor);