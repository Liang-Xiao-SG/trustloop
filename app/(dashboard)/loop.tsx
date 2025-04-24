import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import useHelpRequests from '../../hooks/useHelpRequests';
import HelpRequestCard from '../../components/HelpRequestCard';
import FloatingPlusButton from '../../components/FloatingPlusButton';
import useTasks from '../../hooks/useTasks';
import TaskCard from '../../components/TaskCard';
export default function Loop() {
  const {tasks, loading, addTask } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔔 Review My Need</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
      <FloatingPlusButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});
