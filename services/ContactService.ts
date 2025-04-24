export type Contact = {
    id: string;
    name: string;
    relationship: string;
    note?: string;
  };
  
  let MOCK_CONTACTS: Contact[] = [
    { id: '1', name: 'Alice', relationship: 'Friend' },
    { id: '2', name: 'Bob', relationship: 'Colleague', note: 'Works in HR' },
    { id: '3', name: 'Charlie', relationship: 'Cousin' },
  ];
  
  export const fetchContacts = async (): Promise<Contact[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_CONTACTS;
  };
  
  export const addContact = async (name: string, relationship: string, note?: string): Promise<void> => {
    const newContact: Contact = {
      id: Date.now().toString(),
      name,
      relationship,
      note,
    };
    MOCK_CONTACTS.push(newContact);
  };
  