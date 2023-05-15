import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
  },
});
