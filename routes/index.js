const express = require('express');
const router = express.Router();
const contactsRoutes = require('./contacts');
const swaggerRoutes = require('./swagger');

router.use('/contacts', contactsRoutes);

router.use('/api-docs', swaggerRoutes);

module.exports = router;
