const swaggerAutogen = require('swagger-autogen')();
const env = require('dotenv').config();

const host =
  process.env.NODE_ENV === 'production'
    ? 'https://cse340-spring25.onrender.com'
    : 'localhost:8080';

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts with CRUD operations.'
  },
  host: host
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);