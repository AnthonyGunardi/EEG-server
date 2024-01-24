const express = require('express');
const router= express.Router();
const eventController =require('../controllers/event');

router.get('/events',eventController.getEvents);
router.get('/events/active',eventController.getActiveEvents);
router.get('/events/:id',eventController.getEventById);

module.exports = router;