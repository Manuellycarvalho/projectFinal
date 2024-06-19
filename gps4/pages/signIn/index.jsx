import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from '../signIn/styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://manuellycarvalho.pythonanywhere.com/api/token/', 
        {
          username: username,
          email: email,
          password: password,
        }
      );

      const token = response.data.access;
      await AsyncStorage.setItem('userToken', token);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de autenticação', 'Credenciais inválidas. Verifique seu usuário e senha.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        placeholder='Usuário'
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Senha'
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry={true}
      />

      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;
