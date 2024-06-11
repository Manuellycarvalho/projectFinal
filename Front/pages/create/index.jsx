import React, { useState } from "react";
import { View, TextInput, Pressable, Alert, Text } from "react-native";
import axios from "axios";
import styles from "../create/styles";

export default function Create() {
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/usuario/', {
                nome,
                rua,
                bairro,
                cidade,
                uf,
                cep,
                email,
                numero
            });
            console.log('Response', response.data);
            Alert.alert('Post criado com sucesso!');
        } catch (error) {
            console.error('Error: ', error);
            Alert.alert('Erro ao criar post');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Create</Text>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={text => setNome(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="Rua"
                value={rua}
                onChangeText={text => setRua(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="Bairro"
                value={bairro}
                onChangeText={text => setBairro(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="Cidade"
                value={cidade}
                onChangeText={text => setCidade(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="UF"
                value={uf}
                onChangeText={text => setUf(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="CEP"
                value={cep}
                onChangeText={text => setCep(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.caixa}
            />
            <TextInput
                placeholder="Número"
                value={numero}
                onChangeText={text => setNumero(text)}
                style={styles.caixa}
                keyboardType="numeric"
            />

            <Pressable
                style={styles.btn}
                onPress={handleSubmit}
            >
                <Text style={styles.textBtn}>Enviar</Text>
            </Pressable>
        </View>
    );
}
