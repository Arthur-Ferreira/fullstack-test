const Contact = require('../models/contact_model');

async function getAllContacts(req, res, next) {
  try {
    const contacts = await Contact.fetchAllContacts();
    res.status(200)
      .json({
        contacts: contacts
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function insertNewContact(req, res, next) {
  const data = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.message,
  ];

  const contact = new Contact();
  let result;

  try {
    result = await contact.saveNewContact(data);
  } catch (error) {
    console.log(error);
    next(error);
  }

  res.status(200)
    .json({ result });
}


module.exports = {
  getAllContacts: getAllContacts,
  insertNewContact: insertNewContact
};