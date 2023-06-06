import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Exercicio 3</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [buttonPressed, setButtonPressed] = useState('');

  const handleButtonPress = (buttonLabel) => {
    setButtonPressed(buttonLabel);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Botão pressionado: {buttonPressed}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sim" onPress={() => handleButtonPress('Sim')} />
        <Button title="Não" onPress={() => handleButtonPress('Não')} />
        <Button title="Talvez" onPress={() => handleButtonPress('Talvez')} />
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
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
