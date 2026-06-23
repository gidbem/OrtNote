import React, { useState } from 'react';
import {View,Text,TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login() {
    if (email === '' || senha === '') {
      Alert.alert('Atenção', 'Preencha o email e a senha.');
      return; 
    }

    navigation.navigate('Home'); 
  }

  return (
    <View style={styles.fundo}>
      <View style={styles.cartao}>
        <Text style={styles.titulo}>ORTNOTE</Text>

        <View style={styles.abas}>
          <TouchableOpacity style={styles.abaAtiva}>
            <Text style={styles.abaAtivaTexto}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.abaInativa}>
            <Text style={styles.abaInativaTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelCampo}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
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
    backgroundColor: '#8B3FBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelTopo: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: '#ccc',
    fontSize: 13,
  },
  cartao: {
    backgroundColor: '#F5B800', 
    borderRadius: 24,
    padding: 28,
    width: '82%',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
    color: '#1a1a1a',
    letterSpacing: 2,
  },
  abas: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 30,
    gap: 8,
  },
  abaAtiva: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  abaAtivaTexto: {
    color: '#fff',
    fontWeight: 'bold',
    width: 80,
    marginLeft: 30
  },
  abaInativa: {
    backgroundColor: '#e0c060',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  abaInativaTexto: {
    color: '#555',
    width: 80,
    marginLeft: 30
  },
  labelCampo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#5a3e00',
    marginBottom: 4,
    marginTop: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#d4a800',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#fff',
    marginBottom: 4,
  },
  botao: {
    backgroundColor: '#1a1200',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});