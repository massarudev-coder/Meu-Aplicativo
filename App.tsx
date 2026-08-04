import '@expo/metro-runtime'

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // String
  let nome: string = "Fernando";

  // Number
  let idade: number = 17;

  // Boolean
  let status: boolean = true; 

  // Array
  let frutas: string[] = ["Banana", "Maçã", "Uva"];

  // Tupla
  let pessoa: [string, number, string] = ["Fernando", 17, "Manaus"];

  // Objeto
  type Carro = {
    marca: string,
    ano: number,
    cor?: string // A interrogação indica que a propriedade é opcional
  }

  let carro1 : Carro = {
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  texto:{
    fontSize: 24,
    color: "#000"
  },

  baixo: {
    backgroundColor: '#f8d403',
    height: 200,
  },

  alto: {
    backgroundColor: '#b71bf9',
    height: 200,
  }

});


