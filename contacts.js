const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(({ id }) => id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const newContacts = contacts.filter(({ id }) => id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return newContacts;
}

async function addContact(name, email, phone, id) {
  const contact = { name, email, phone, id };
  const contacts = await listContacts();
  contacts.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
