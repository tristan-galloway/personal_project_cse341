const mongodb = require('../data/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('test').collection('contacts').find(); // Specify the database name
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching contacts.' });
  }
};

const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('test').collection('contacts').findOne({ _id: userId }); // Use findOne for a single document
    if (!result) {
      return res.status(404).json({ error: 'Contact not found.' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the contact.' });
  }
};

module.exports = { getAll, getSingle };