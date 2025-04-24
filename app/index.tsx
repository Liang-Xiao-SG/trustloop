import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <View style={styles.button}>
      <Button title="Sign In" onPress={() => router.replace('/(dashboard)/home')} />
      </View>
      <Link href="/signup" asChild>
        <Button title="Sign Up" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 40 },
  button: { marginVertical: 8 },
});
