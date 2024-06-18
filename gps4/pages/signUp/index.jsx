import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';

export default function SignUp() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigation = useNavigation();

    const handleRegistro = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('access_token'); // Recupera o token de AsyncStorage

            const response = await axios.post(
                'https://manuellycarvalho.pythonanywhere.com/api/create_user/',
                {
                    username: usuario,
                    email: email,
                    password: senha,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json', // Define o tipo de conteúdo
                    },
                }
            );

            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
                navigation.navigate('Login'); // Navega para a tela de login após o registro
            }, 2000);
        } catch (error) {
            console.error('Erro no cadastro de usuário', error);
            Alert.alert('Erro', 'Erro no cadastro de usuário. Verifique os dados e tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar Usuário</Text>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Usuário</Text>
                    <TextInput
                        style={styles.input}
                        value={usuario}
                        onChangeText={setUsuario}
                        placeholder="Digite seu usuário"
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite seu email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <Pressable onPress={handleRegistro} style={styles.button}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </Pressable>
            </View>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>
                    Já tem uma conta? <Text style={styles.loginLink} onPress={() => navigation.navigate('SignIn')}>Faça login.</Text>
                </Text>
            </View>
            {showAlert && (
                <View style={styles.alert}>
                    <Text style={styles.alertText}>Usuário cadastrado com sucesso!</Text>
                </View>
            )}
        </View>
    );
}

