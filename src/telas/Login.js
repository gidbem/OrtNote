import React, { useState } from 'react';
import {View,Text,TextInput, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login() {
    if (email === '' || senha === '') {
      alert('Atenção, preencha o email e a senha.');
      return; 
    }

      navigation.navigate('Home'); 
  }

  return (
    <View style={styles.fundo}>
    <Image source={require('./logo.png')} style={styles.imagem} />
      <View style={styles.cartao}>

        <Text style={styles.labelCampo}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="nome.sobrenome@ort.org.br"
          placeholderTextColor="#b89a30"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail} 
        />

        <Text style={styles.labelCampo}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••••"
          placeholderTextColor="#b89a30"
          secureTextEntry={true} 
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={Login}>
          <Text style={styles.botaoTexto}>ENTRAR →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',  
  },
  labelTopo: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: '#ccc',
    fontSize: 13,
  },
  cartao: {
    backgroundColor: '#f5c534', 
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    padding: 28,
    width: '100%',
    height: '85%',
    marginTop: 160,
    //IOS
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    //Android
    elevation: 9,
  },
  labelCampo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#805701',
    marginTop: 40,
    marginBottom: 7,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#d4a800',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 20,
    fontSize: 15,
    color: '#fff',
    marginBottom: 4,
  },
  botao: {
    backgroundColor: '#8c06da',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: '85%',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  imagem: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 80,
    width: 500,
    height: 160,
    alignSelf: 'center',   
    resizeMode: 'contain',
},
});