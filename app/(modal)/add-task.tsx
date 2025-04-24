import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function AddTaskScreen() {
  const router = useRouter();
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('New Task:', { task, description });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Help Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={task}
        onChangeText={setTask}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20,paddingTop: 40,paddingBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
  },
});
