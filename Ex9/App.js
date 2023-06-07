import { StyleSheet, Text, View } from 'react-native';

function CardMovie(filme, imagem, horario) {
  return (
    <View>
      <Text>{filme}</Text>
      <Image />
      <Text>{horario}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <CardMovie />
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
