const express = require('express');
const router= express.Router();
const userController =require('../controllers/user');

router.get('/user/:id',userController.getUserById);
router.put('/user/:id',userController.updateUserById);
router.get('/users',userController.getUsers);

module.exports = router;