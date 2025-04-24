import { Tabs } from 'expo-router';

export default function DashboardLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="mine" options={{ title: 'Mine' }} />
        <Tabs.Screen name="raise" options={{ title: 'Raise' }} />
        <Tabs.Screen name="graph" options={{ title: 'Graph' }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      </Tabs>
    );
  }
  