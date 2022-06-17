const RDV = require('../controllers/Appointment.controller');
const express = require('express')
const router = express.Router()

router.post('/', RDV.createAppointments);

module.exports = router