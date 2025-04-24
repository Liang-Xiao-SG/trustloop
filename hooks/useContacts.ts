import { useEffect, useState } from 'react';
import { Contact, fetchContacts, addContact as addNewContact } from '../services/ContactService';

export default function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const loadContacts = async () => {
    setLoading(true);
    const data = await fetchContacts();
    setContacts(data);
    setLoading(false);
  };

  const addContact = async (name: string, relationship: string, note?: string) => {
    await addNewContact(name, relationship, note);
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return { contacts, loading, addContact };
}