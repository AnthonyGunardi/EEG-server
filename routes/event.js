const express = require('express');
const router= express.Router();
const eventController =require('../controllers/event');

router.get('/events',eventController.getActiveEvents);

module.exports = router;