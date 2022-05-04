const mongoose = require('mongoose');

const Appointment = mongoose.Schema({

    patient_Name:{type:String, required:[true, 'PatientName is required']},
    patient_CIN:{type:String, required:[true, 'PatientCIN is required']},
    date:{type:Date, required:[true, 'Date is required']},
    tel:{type:String, required:[true, 'Tel is required']},
   
})
module.exports = mongoose.model('Appointment', Appointment);