const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
  // console.log(JSON.parse(data));
}
listContacts();

// function getContactById(contactId) {
//   // ...twój kod
// }

// function removeContact(contactId) {
//   // ...twój kod
// }

// function addContact(name, email, phone) {
//   // ...twój kod
// }
