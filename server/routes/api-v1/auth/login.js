const express = require('express');
const router = express.Router();
const { auth } = require('../../../controllers/customerController')

router.post('/login', auth);

module.exports = router;