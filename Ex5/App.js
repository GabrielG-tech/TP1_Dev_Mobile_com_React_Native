import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    setContagem(contagem - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contagem}>{contagem}</Text>

      <View style={styles.btns}>
        <TouchableOpacity onPress={decrementar}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={incrementar}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    textAlign: 'center',
    fontSize: 46,
    paddingBottom: 4,
    margin: 4,
    marginHorizontal: 6,
    width: 160,
    height: 80,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    marginVertical: 10,
  },
  contagem: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});
