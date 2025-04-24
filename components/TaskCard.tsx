import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../services/TaskService';

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.time}>{task.time}</Text>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});
