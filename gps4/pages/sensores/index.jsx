import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';


const Sensor = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://manuellycarvalho.pythonanywhere.com/api/sensores/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSensores(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSensores();
  }, []);

  const handleExcluir = async (id) => {
    try {
      const token = getToken();
      // Aqui você deve implementar a lógica para excluir o sensor com o ID fornecido
      // Exemplo de requisição DELETE com Axios
      await axios.delete(`http://127.0.0.1:8000/api/sensores/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Após excluir com sucesso, atualize a lista de sensores removendo o sensor excluído
      setSensores(prevSensores => prevSensores.filter(sensor => sensor.id !== id));

      // Exiba uma mensagem de sucesso (opcional)
      Alert.alert('Sucesso', `Sensor com ID ${id} excluído com sucesso.`);
    } catch (error) {
      console.error(`Erro ao excluir sensor com ID ${id}`, error);
      // Exiba uma mensagem de erro (opcional)
      Alert.alert('Erro', `Erro ao excluir sensor com ID ${id}.`);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro ao carregar os dados: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Lista de Sensores</Text>
      <FlatList
        data={sensores}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 }}>
            <Text>ID: {item.id}</Text>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Localização: {item.localizacao}</Text>
            <Text>Responsável: {item.responsavel}</Text>
            <Text>Longitude: {item.longitude}</Text>
            <Text>Latitude: {item.latitude}</Text>
            <TouchableOpacity onPress={() => handleExcluir(item.id)} style={{ marginTop: 8, backgroundColor: 'red', padding: 8, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Excluir Sensor</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Sensor;
