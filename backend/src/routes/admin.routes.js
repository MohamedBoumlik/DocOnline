const admin = require('../controllers/admin.controller')
const express = require('express')
const router = express.Router()

router.post('/', admin.authenticate);

module.exports = router