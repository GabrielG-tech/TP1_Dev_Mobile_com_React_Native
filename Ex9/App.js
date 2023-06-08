import { StyleSheet, Text, View, Image } from 'react-native';
import imag from './BlackPanther.jpg'

function CardMovie({filme, img, horario}) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>{filme}</Text>
      <Image
        style={styles.imagem}
        source={{ uri: img }} />
      <Text style={styles.texto}>{horario}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <CardMovie filme='Pantera Negra' img={require('./BlackPanther.jpg')} horario='17:30' />
      <CardMovie filme='Pantera Negra' img={require('./BlackPanther.jpg')} horario='17:30' />
      <CardMovie filme='Pantera Negra' img={require('./BlackPanther.jpg')} horario='17:30' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 8,
  },
  imagem: {
    width: 240,
    height: 360,
  },
  texto: {
    fontSize: 36,
  }
});
