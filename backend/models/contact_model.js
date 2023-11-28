const db = require('../data/database');

class Contact {
  constructor(name, email, phone, message, id) {
    name = this.name
    email = this.email
    phone = this.phone
    message = this.message
    id = this.id
  }

  static async fetchAllContacts() {
    const sqlQuery = `
    SELECT * FROM contacts
    `;

    const [contacts, headers] = await db.query(sqlQuery);
    return contacts;
  }

  async saveNewContact(data) {
    const sqlQuery = `
    INSERT INTO contacts (contact_name, contact_email, contact_phone, contact_message)
    VALUES (?)
    `;

    let insertedId;

    const result = await db.query(sqlQuery, [data], function (err, data) {
      if (err) {
        // some error occured
        console.log(err);
      } else {
        // successfully inserted into db
        insertedId = result.insertedId;
        return `Inserted row ID: ${insertedId}`;
      }
    });
  }
}

module.exports = Contact;