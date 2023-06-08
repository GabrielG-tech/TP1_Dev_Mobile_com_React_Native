import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const data = ['John', 'Paul', 'Ringo', 'George'];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Membros dos Beatles</Text>
      <FlatList
        style={styles.lista}
        data={data}
        renderItem={({ item, index }) => (
          <Text>{index + 1} - {item}</Text>
        )}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  lista: {
    fontSize: 14,
  }
});
