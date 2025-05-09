const mongodb = require('../data/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('').collection('contacts').find();
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.favoriteColor ||
    !req.body.birthdate
  ) {
    return res.status(400).json({ error: 'Missing a required field.' });
  }

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthdate: req.body.birthdate
  };

  try {
    const result = await mongodb.getDb().db('').collection('contacts').insertOne(contact);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the contact.' });
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthdate: req.body.birthdate
  };

  try {
    const result = await mongodb
      .getDb()
      .db('')
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    res.status(204).json(result);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the contact.' });
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  try {
    const result = await mongodb.getDb().db('').collection('contacts').deleteOne({ _id: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found.' });
    }
    res.status(200).json({ message: 'Contact successfully deleted.' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the contact.' });
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };
