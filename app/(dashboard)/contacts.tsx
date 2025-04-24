import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import useHelpRequests from '../../hooks/useHelpRequests';
import ContactCard from '../../components/ContactCard';
import useContacts from '../../hooks/useContacts';

export default function contacts() {
  const { contacts, loading, addContact } = useContacts();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔔 Help Requests from Friends</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContactCard
              contact={item}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});
