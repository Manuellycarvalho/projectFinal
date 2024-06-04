import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignIn = () => {
    // Credenciais codificadas no código
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'admin123';

    // Verifica se as credenciais correspondem às credenciais codificadas no código
    if (usuario === hardcodedUsername && senha === hardcodedPassword) {
      // Se autenticado com sucesso, navegue para a tela Home
      navigation.navigate('Home');
    } else {
      // Se a autenticação falhar, exiba uma mensagem de erro
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
        <View>
         {/* <Image source={require('./styles')} style={styles.logo} /> */}
        </View>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <TextInput
        placeholder='Usuário'
        onChangeText={setUsuario}
        value={usuario}
        style={styles.caixa}
      />
      <TextInput
        placeholder='Senha'
        onChangeText={setSenha}
        value={senha}
        style={styles.caixa}
        secureTextEntry={true}
      />

      <Pressable
        style={styles.btnOk}
        onPress={handleSignIn}
      >
        <Text style={{ fontSize: 25 }}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.btnOk}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={{ fontSize: 25 }}>Sign Up</Text>
      </Pressable>

    </View>
  );
}
