import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [btnClicado, setBtnClicado] = useState('');

  const handleClick = (text) => {
    setBtnClicado(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você vai me passar de ano? {btnClicado}</Text>
      <View style={styles.btns}>
        <Button title="Sim" onPress={() => handleClick('Sim')} />
        <Button title="Não" onPress={() => handleClick('Não')} />
        <Button title="Talvez" onPress={() => handleClick('Talvez')} />
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
  btns: {
    flexDirection: 'row',
  },
});
