import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AuthInput from '../components/AuthInput';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Signing up:', { email, password });
    router.replace('/dashboard/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AuthInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <View style={styles.button}>
        <Button title="Back" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 30 },
  button: { marginVertical: 8 },
});
