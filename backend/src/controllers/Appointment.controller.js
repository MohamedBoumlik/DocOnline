const RDV = require("../models/Appointment");
const dayjs = require('dayjs');

// -------------------------- Create Appointments --------------------------

exports.createAppointments = async (req, res) => {
  const { patient_Name, patient_CIN, date, hour, tel, patient_Email } = req.body;
  const allAppointments = await RDV.find();
  let formatedDate = dayjs(date).format('YYYY-MM-DD');

  try {
    const appointmentFound = allAppointments.find(
      (appointment) => appointment.date === date && appointment.hour === hour
    );

    if (appointmentFound)
      return res.status(400).json({ message: "This appointment is already booked" });

    const newAppointment = await RDV.create({
      patient_Name,
      patient_CIN,
      patient_Email,
      date,
      formatedDate,
      tel,
      hour,
    });

    res.status(200).json({ newAppointment });
  } catch (err) {
    res.status(400).json({ error: err.message }); // req error
  }
};
