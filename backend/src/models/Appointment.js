const mongoose = require("mongoose");

const Appointment = mongoose.Schema({
  patient_Name: { type: String, required: [true, "PatientName is required"] },
  patient_CIN: { type: String, required: [true, "PatientCIN is required"] },
  patient_Email: { type: String, required: [true, "PatientEmail is required"] },
  date: { type: String, required: [true, "Date is required"] },
  hour: { type: String, required: [true, "Hour is required"] },
  tel: { type: String, required: [true, "Tel is required"] },
  // doctor: {type:mongoose.Schema.Types.ObjectId,ref:'Doctor',required: [true, "Doctor is required"]},
});
module.exports = mongoose.model("Appointment", Appointment);
