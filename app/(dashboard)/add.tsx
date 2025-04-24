import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import useHelpRequests from '../../hooks/useHelpRequests';
import HelpRequestCard from '../../components/HelpRequestCard';

export default function Add() {
  const { data, loading, offerHelp } = useHelpRequests();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔔 Help Requests from Friends</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HelpRequestCard
              name={item.name}
              task={item.task}
              time={item.time}
              onHelp={() => offerHelp(item.id)}
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
