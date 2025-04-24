import { Tabs } from 'expo-router';

export default function DashboardLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="home" options={{ title: 'Offer Help' }} />
        {/* <Tabs.Screen name="create" options={{ title: 'Create' }} /> */}
        <Tabs.Screen name="loop" options={{ title: 'Ask For Help' }} />
        {/* <Tabs.Screen name="graph" options={{ title: 'Graph' }} /> */}
        <Tabs.Screen name="contacts" options={{ title: 'Contacts' }} />
      </Tabs>
    );
  }
  