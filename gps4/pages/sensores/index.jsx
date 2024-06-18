import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './styles'; // Importe seus estilos aqui

const Sensor = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSensores() {
      try {
        const response = await axios.get('https://manuellycarvalho.pythonanywhere.com/api/sensores/');
        setSensores(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchSensores();
  }, []);

  const handleExcluir = async (id) => {
    try {
      console.log(`Excluir sensor com ID ${id}`);
      await axios.delete(`https://manuellycarvalho.pythonanywhere.com/api/sensores/${id}`);
      Alert.alert('Sucesso', `Sensor com ID ${id} excluído com sucesso.`);
      // Atualize a lista de sensores após a exclusão, se necessário
      setSensores(sensores.filter(sensor => sensor.id !== id));
    } catch (error) {
      console.error(`Erro ao excluir sensor com ID ${id}`, error);
      Alert.alert('Erro', `Erro ao excluir sensor com ID ${id}: ${error.message}`);
    }
  };

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro ao carregar os dados: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Sensores</Text>
      <ScrollView style={styles.scrollView}>
        {sensores.map(sensor => (
          <View key={sensor.id} style={styles.sensorContainer}>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>ID:</Text>
              <Text>{sensor.id}</Text>
            </View>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>Tipo:</Text>
              <Text>{sensor.tipo}</Text>
            </View>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>Localização:</Text>
              <Text>{sensor.localizacao}</Text>
            </View>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>Responsável:</Text>
              <Text>{sensor.responsavel}</Text>
            </View>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>Longitude:</Text>
              <Text>{sensor.longitude}</Text>
            </View>
            <View style={styles.sensorRow}>
              <Text style={styles.label}>Latitude:</Text>
              <Text>{sensor.latitude}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log(`Editar sensor com ID ${sensor.id}`)} style={styles.button}>
              <Text style={styles.buttonText}>Alterar Dados</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => handleExcluir(sensor.id)} style={[styles.button, styles.buttonDelete]}>
              <Text style={styles.buttonText}>Excluir Sensor</Text>
            </TouchableOpacity> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sensor;
