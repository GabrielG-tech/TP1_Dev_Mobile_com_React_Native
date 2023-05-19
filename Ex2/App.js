import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.text}>Olá Mundo!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixa: {
    backgroundColor: 'silver',
    width: 180,
    height: 180,
    padding: 4,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});
