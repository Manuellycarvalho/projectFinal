import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import styles from "./styles";

export default function Update(){
    const [userId, setUserId] = useState('');
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(tokenY => {
                console.log("Token Read", tokenY);
                setToken(tokenY);
            }).catch(error => {
                console.log(error);
            });
    }, [token]);

    const buscar = () => {
        axios.get(`http://127.0.0.1:8000/api/usuario/${userId}`)
            .then((response) => {
                setNome(response.data.nome);
                setRua(response.data.rua);
                setBairro(response.data.bairro);
                setCidade(response.data.cidade);
                setUf(response.data.uf);
                setCep(response.data.cep);
                setEmail(response.data.email);
                setNumero(response.data.numero);
            })
            .catch((erro) => {
                console.log(erro);
            });
    };

    const atualizar = () => {
        AsyncStorage.getItem('token')
            .then(token => {
                axios.put(`http://127.0.0.1:8000/api/usuario/${userId}`, {
                    nome,
                    rua,
                    bairro,
                    cidade,
                    uf,
                    cep,
                    email,
                    numero
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log("User updated successfully:", response.data);
                    setUserId('');
                    setNome('');
                    setRua('');
                    setBairro('');
                    setCidade('');
                    setUf('');
                    setCep('');
                    setEmail('');
                    setNumero('');
                })
                .catch(error => {
                    console.error("Error updating user:", error);
                });
            })
            .catch(error => {
                console.error("Error retrieving token from AsyncStorage:", error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Update</Text>
            <TextInput
                placeholder="ID"
                style={styles.caixa}
                onChangeText={(e) => setUserId(e)} 
                value={userId}
            />
            <Pressable
                style={styles.btn}
                onPress={buscar}
            >
                <Text style={styles.textBtn}>Search</Text>
            </Pressable>
            <TextInput
                placeholder="Nome"
                style={styles.caixa}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <Pressable
                style={styles.btn}
                onPress={atualizar}
            >
                <Text style={styles.textBtn}>Update</Text>
            </Pressable>
        </View>
    );
}
