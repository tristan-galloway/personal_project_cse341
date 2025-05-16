const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// #swagger.tags = ['Contacts']
router.get(
  '/',
  /* #swagger.description = 'Get all contacts'
     #swagger.responses[200] = {
       description: 'List of contacts',
       schema: [
         {
           _id: "6816be94769e8f5a9c4a6a07",
           firstName: "John",
           lastName: "Doe",
           email: "johndoe@test.com",
           favoriteColor: "blue",
           birthdate: "12/12/20"
         }
       ]
     }
  */
  contactsController.getAll
);

router.get(
  '/:id',
  /* #swagger.description = 'Get a single contact by ID'
     #swagger.parameters['id'] = { 
       description: 'Contact ID', 
       type: 'string', 
       example: '609e12672f8fb814b56fa181' 
     }
     #swagger.responses[200] = {
       description: 'Contact found',
       schema: {
         firstName: 'Jane',
         lastName: 'Smith',
         email: 'janesmith@test.com',
         favoriteColor: 'green',
         birthdate: '01/01/21'
       }
     }
     #swagger.responses[404] = { description: 'Contact not found' }
  */
  contactsController.getSingle
);

router.post(
  '/',
  /* #swagger.description = 'Create a new contact'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Contact data',
       required: true,
       schema: {
         firstName: 'Alice',
         lastName: 'Johnson',
         email: 'alicejohnson@test.com',
         favoriteColor: 'red',
         birthdate: '02/02/22'
       }
     }
     #swagger.responses[201] = { 
       description: 'Contact created',
       schema: {
          "acknowledged": true,
          "insertedId": "6826cf1a65bd95eeb8d5908c"
       }
     }
     #swagger.responses[400] = { description: 'Missing a required field.' }
  */
  contactsController.createContact
);

router.put(
  '/:id',
  /* #swagger.description = 'Update a contact by ID'
     #swagger.parameters['id'] = { 
       description: 'Contact ID', 
       type: 'string', 
       example: '609e12672f8fb814b56fa181' 
     }
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Updated contact data',
       required: true,
       schema: {
         firstName: 'John',
         lastName: 'Doe',
         email: 'johndoe@test.com',
         favoriteColor: 'blue',
         birthdate: '12/12/20'
       }
     }
     #swagger.responses[204] = { description: 'Contact updated' }
     #swagger.responses[404] = { description: 'Contact not found' }
  */
  contactsController.updateContact
);

router.delete(
  '/:id',
  /* #swagger.description = 'Delete a contact by ID'
     #swagger.parameters['id'] = { 
       description: 'Contact ID', 
       type: 'string', 
       example: '609e12672f8fb814b56fa181' 
     }
     #swagger.responses[200] = { description: 'Contact deleted' }
     #swagger.responses[404] = { description: 'Contact not found' }
  */
  contactsController.deleteContact
);

module.exports = router;
