import React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function FloatingPlusButton() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <Provider>
      <Portal>
        {/* {open && <View style={styles.backdrop} pointerEvents="none" />} */}
        <View style={styles.backdrop} pointerEvents="none" />
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'plus'}
          actions={[
            { icon: 'note-plus', label: 'Add Task', onPress: () => router.push('/add-task') },
            { icon: 'magnify', label: 'Search', onPress: () => console.log('Search') },
          ]}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // actions already shown
            }
          }}
        />
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    zIndex: 1,
  },
});
