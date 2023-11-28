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

  async saveNewContact() {
    const data = [
      this.name,
      this.email,
      this.phone,
      this.message,
    ];

    const sqlQuery = `
    INSERT INTO contacts (contact_name, contact_email, contact_phone, contact_message)
    VALUES (?)
    `;

    await db.query(sqlQuery, [data],);
  }
}

module.exports = Contact;