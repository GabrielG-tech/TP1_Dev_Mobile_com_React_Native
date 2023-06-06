import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={incrementar}>
        <Text style={styles.btn}>+</Text>
      </TouchableOpacity>

      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity onPress={decrementar}>
        <Text style={styles.btn}>-</Text>
      </TouchableOpacity>

      <View style={styles.btns}></View>
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
  btns: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#993399',
    marginVertical: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});
