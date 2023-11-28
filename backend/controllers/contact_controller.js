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
  const data = { 
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  const contact = new Contact(data);

  let insertedId;
  try {
    const result = await contact.saveNewContact();
    insertedId = result.insertedId;
  } catch (error) {
    console.log(error);
    next(error);
  }

  res.status(200)
    .json({ contact });
}


module.exports = {
  getAllContacts: getAllContacts,
  insertNewContact: insertNewContact
};