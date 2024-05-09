import axios from "axios"
import { useState, useEffect } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Read() {
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
    const [erro, setErro] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(tokenY => {
                console.log("Token Read", tokenY);
                setToken(tokenY)
            }).catch(error => {
                console.log(error);
            })
    }, [erro])

    const buscar = async () => {
        console.log("Token Buscar", token)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/' + userId,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            setNome(response.data.nome)
            setRua(response.data.rua)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setUf(response.data.uf)
            setCep(response.data.cep)
            setEmail(response.data.email)
            setNumero(response.data.numero)

        } catch (error) {
            setErro(error.response.status)
            console.log(error);
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Read</Text>
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

        </View>
    )
}