const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
   const data = await fs.readFile(contactsPath)
   const contacts = JSON.parse(data);
        return contacts;
  }
async function getContactById(contactId) {
    const contacts = await listContacts();
    const contact = contacts.find((item) =>Number(item.id) === contactId);
    return contact || null
  }

  
async function removeContact(contactId) {
    const contacts = await listContacts();
    const indexOfContacts = contacts.findIndex((item) => Number(item.id) === contactId);
  if (indexOfContacts === -1) {
    return null;
  }
  const newContacts = contacts.filter((item) => Number(item.id) !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return contacts[indexOfContacts];
  }
  
async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
  }


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}; 