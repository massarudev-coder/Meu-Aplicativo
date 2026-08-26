// imports
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';

// Função principal
export default function Login() {
  // Ensinar sobre estados e fazer o input
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [exibir, setExibir] = useState<boolean>(false);

  const emailCerto = 'teste@gmail.com';
  const senhaCerta = 'teste123';

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Funcionou!</Text>

      <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        placeholderTextColor={"#c1c1c1"}
        onChangeText={setEmail}
        value={email}
      />

      <View style={styles.viewInputSenha}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          placeholderTextColor={"#c1c1c1"}
          onChangeText={setSenha}
          value={senha}
          maxLength={8}
          secureTextEntry={exibir ? false : true}
        />

        {exibir 
            ? <Feather onPress={()=>setExibir(!exibir)} name="eye" size={24} color="black" style={{marginRight: 10}} />
            : <Feather onPress={()=>setExibir(!exibir)} name="eye-off" size={24} color="black" style={{marginRight: 10}}/>
        }
      </View>

      {email === emailCerto && senha === senhaCerta && (
        <Text style={styles.sucesso}>Email e senhas conferem.</Text>
      )}

      {(email !== emailCerto || senha !== senhaCerta) && email !== '' && senha !== '' && (
        <Text style={styles.erro}>Email ou senha incorretos.</Text>
      )}

      <Text style={styles.texto2}>
        Primeiro acesso?{" "}
        <Text onPress={() => alert("Funcionou")} style={styles.destaque}>
          Cadastre-se.
        </Text>
      </Text>
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64d4f9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  texto: {
    fontSize: 32,
    fontWeight: "bold",
  },
  texto2: {
    fontSize: 24,
  },
  destaque: {
    fontWeight: "bold",
    color: "#f00",
  },

  inputEmail: {
    backgroundColor: "#000000",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 24,
  },

  viewInputSenha:{
    backgroundColor: "#0d0c0c",
    width: "100%",
    borderRadius: 10,
    flexDirection:  'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  inputSenha:{
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  sucesso:{
    fontSize: 24,
    color: '#079a11'
  },

  erro:{
    fontSize: 24,
    color: '#f00'
  }
});

