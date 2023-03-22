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

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  const dataParse = JSON.parse(data);
  const contactIndex = Number(dataParse[dataParse.length - 1].id) + 1;
  const addData = [
    ...dataParse,
    {
      id: `${contactIndex}`,
      name,
      email,
      phone,
    },
  ];
  await fs.writeFile(contactsPath, JSON.stringify(addData));
  return addData;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
