const express = require('express');
const router= express.Router();
const excelController =require('../controllers/excel');

router.get('/excel/users',excelController.getUsersExcel);

module.exports = router;