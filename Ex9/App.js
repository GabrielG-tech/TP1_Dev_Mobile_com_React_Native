import { StyleSheet, Text, View } from 'react-native';

function CardMovie(filme, imagem, horario) {
  let img = require(imagem).toString()
  return (
    <View>
      <Text>{filme}</Text>
      <Image
        style={styles.imagem}
        source={img}/>
      <Text>{horario}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <CardMovie filme='Pantera Negra' imagem='./assets/BlackPanther.jpg' horario='17:30' />
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
  imagem: {
    width: 80,
    height: 120,
  },
});
