import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import styles from "./styles";

export default function Delete() {
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
        axios.delete(`http://127.0.0.1:8000/api/usuario/${userId}`)
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

    const apagar = () => {
        AsyncStorage.getItem('token')
            .then(token => {
                axios.delete(`http://127.0.0.1:8000/api/usuario/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log("User deleted successfully:", response.data);
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
                    console.error("Error deleting user:", error);
                });
            })
            .catch(error => {
                console.error("Error retrieving token from AsyncStorage:", error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Delete</Text>
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
                <Text style={styles.textBtn}>Ok</Text>
            </Pressable>
            <Text style={[styles.textos, {textAlign: 'center', marginTop: 11}]}>{nome}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{rua}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{bairro}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{cidade}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{uf}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{cep}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{email}</Text>
            <Text style={[styles.textos, {textAlign: 'center'}]}>{numero}</Text>

            <Pressable
                style={styles.btn}
                onPress={apagar}
            >
                <Text style={styles.textBtn}>Delete</Text>
            </Pressable>
        </View>
    );
}
