const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');
 
// Route configuration
routes.get('/', lesson1Controller.tristanRoute);
routes.get('/samantha', lesson1Controller.samanthaRoute);

module.exports = routes;