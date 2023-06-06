import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const listaImagens = [
    require('./assets/imagem1.png'),
    require('./assets/imagem2.png'),
  ];
  const textoImagens = ['Imagem 1','Imagem 2'];
  const [imagemAtual, setImagem] = useState(0);

  function changeImage() {
    const imagemSorteada = Math.floor(Math.random() * listaImagens.length);
    setImagem(imagemSorteada);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={listaImagens[imagemAtual]} />

      <Text style={styles.text}>
        {textoImagens[imagemAtual]}
      </Text>

      <Button
          onPress={changeImage}
          title="Sortear imagem"
          color="#841584"
        />
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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  }
});
