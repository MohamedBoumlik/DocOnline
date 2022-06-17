const RDV = require("../models/Appointment");
// -------------------------- Create Appointments --------------------------

exports.createAppointments = async (req, res) => {
  const { patient_Name, patient_CIN, date, hour, tel, } = req.body;
  const allAppointments = await RDV.find();

  try {
    const appointmentFound = allAppointments.find(
      (appointment) => appointment.date === date && appointment.hour === hour
    );

    if (appointmentFound)
      return res.status(400).json({ message: "This appointment is already booked" });

    const newAppointment = await RDV.create({
      patient_Name,
      patient_CIN,
      date,
      hour,
      tel,
    });

    res.status(200).json({ newAppointment });
  } catch (err) {
    res.status(400).json({ error: err.message }); // req error
  }
};
