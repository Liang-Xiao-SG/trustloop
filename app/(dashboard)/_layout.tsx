import { Tabs } from 'expo-router';

export default function DashboardLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        {/* <Tabs.Screen name="create" options={{ title: 'Create' }} /> */}
        <Tabs.Screen name="loop" options={{ title: 'TrustLoop' }} />
        {/* <Tabs.Screen name="graph" options={{ title: 'Graph' }} /> */}
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      </Tabs>
    );
  }
  