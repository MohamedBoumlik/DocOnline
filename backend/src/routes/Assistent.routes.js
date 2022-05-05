const assist = require('../controllers/assistent.controller')
const express = require('express')
const router = express.Router()

router.post('/', assist.authenticate);
router.post('/add_assistent', assist.createAssist);
router.get('/assistents', assist.fetch);
router.delete('/delete/:_id', assist.deleteAssist);


module.exports = router