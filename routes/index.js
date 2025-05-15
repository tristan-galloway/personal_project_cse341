const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

router.use('/api-docs', require('./swagger'));

module.exports = router;
