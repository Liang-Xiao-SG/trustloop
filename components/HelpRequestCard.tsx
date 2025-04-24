import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  name: string;
  task: string;
  time: string;
  onHelp: () => void;
};

export default function HelpRequestCard({ name, task, time, onHelp }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name} needs help:</Text>
      <Text style={styles.task}>{task}</Text>
      <Text style={styles.time}>{time}</Text>
      <Button title="Offer Help" onPress={onHelp} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  name: { fontWeight: 'bold', marginBottom: 4 },
  task: { marginBottom: 8 },
  time: { fontSize: 12, color: '#555', marginBottom: 8 },
});
