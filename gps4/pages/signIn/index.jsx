import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
        secureTextEntry={true}
      />

      <Pressable
<<<<<<< HEAD
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
=======
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
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
