const {
    listContacts,
    getContactById,
    addContact,
    removeContact
} = require("./contacts")

const yargs = require("yargs")
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
        const contacts = await listContacts()
        console.table(contacts)
        break;
  
      case "get":
        const oneContact = await getContactById(id)
        console.table(oneContact);
        if (!oneContact) {
            throw new Error(`Contact with id ${id} not found`);
          }
          console.table(oneContact);
        console.log(oneContact)
        break;
  
      case "add":
        const addedContact = await addContact(name, email, phone);
        console.table(addedContact);
        break;
  
      case "remove":
        const removedContact = await removeContact(id);
        if (!removedContact) {
          throw new Error(`Contact with id ${id} not found`);
        }
        console.table(removedContact);
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  const arr = hideBin(process.argv)
  const {argv} = yargs(arr)

  invokeAction(argv);