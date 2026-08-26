import '@expo/metro-runtime';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let nome: string = "Gabriel";
  let idade: number = 29;
  let status: boolean = true;
  let frutas: string[] = ["Banana", "Maçã", "Uva"];
  let pessoa: [string, number, string] = ["Gabriel", 20, "Manaus"];

  type Carro = {
    marca: string,
    ano: number,
    cor?: string
  }

  let carro1: Carro = {
    marca: "Fiat",
    ano: 2020,
    cor: "Preto"
  }

  return (
    <View style={styles.container}>
      <View style={styles.alto}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Idade: {idade}</Text>
      </View>

      <View style={styles.baixo}>
        <Text style={styles.texto}>Fruta: {frutas[1]}</Text>
        <Text style={styles.texto}>Marca: {carro1.marca}</Text>
        <Text style={styles.texto}>{`Marca: ${carro1.marca}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    color: "#f00"
  },
  baixo: {
    backgroundColor: '#f8d403'
  },
  alto: {
    backgroundColor: '#b71bf9'
  }
});
