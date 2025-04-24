import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Contact } from '../services/ContactService';

type Props = {
  contact: Contact;
};

export default function ContactCard({ contact }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.relationship}>{contact.relationship}</Text>
      {contact.note && <Text style={styles.note}>{contact.note}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8f0ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  relationship: {
    fontSize: 14,
    color: '#444',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
