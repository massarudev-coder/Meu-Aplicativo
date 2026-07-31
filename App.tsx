import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Essa foi a biblioteca que eu instalei para poder usar o React Native com o Expo, e ela é necessária para que o aplicativo funcione corretamente.
import '@expo/metro-runtime';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Fernando.</Text>
      <Text style={styles.texto}>Massaru dos Santos.</Text>
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
  texto: {
    fontSize: 24,
    color: '#f00',
    // fontWeight: 'bold',
  },
});
// Teste GitHub