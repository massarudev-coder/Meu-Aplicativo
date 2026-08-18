// imports
import {View, Text, StyleSheet, TextInput} from 'react-native';






// Função Principal
export default function Login(){
    function alertar(){
        alert("Botão pressionado!");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Funcionou!!</Text>
            <TextInput style={styles.inputEmail} placeholder="Digite seu email" />
            {/* <TextInput style={styles.inputSenha} placeholder="Digite sua senha" secureTextEntry /> */}




            <Text style={styles.texto2}>
                Primeiro acesso? <Text onPress={alertar} style={styles.destaque}>Cadastre-se.</Text>
            </Text>
        </View>

    );
}


// Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    texto:{
        fontSize: 32,
        fontWeight: 'bold',
    },

    texto2: {
        fontSize: 24,

    },

    destaque: {
        fontweight: 'bold',
        color: '#0000ff',
    },

    inputEmail: {
        backgroundColor: '#f0f0f0',
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        fontSize: 24,
    },

    // inputSenha: {
    //     backgroundColor: '#f0f0f0',
    //     width: '50%',
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,
    //     borderRadius: 10,
    //     fontSize: 24,
    // },

});