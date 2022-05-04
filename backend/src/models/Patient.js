const mongoose = require('mongoose');

const Appointment = mongoose.Schema({

    name:{type:String, required:[true, 'Name is required']},
    cin:{type:String, required:[true, 'CIN is required']},
    tel:{type:String, required:[true, 'Tel is required']},
   
})
module.exports = mongoose.model('Appointment', Appointment);