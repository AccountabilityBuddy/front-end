import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './pages/Homepage'
import Goal from './pages/components/Goal'

export default function App() {
  return (
    <View style={styles.container}>
      < Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E6'
  },
});
