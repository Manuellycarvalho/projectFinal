import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from './styles';

=======
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearestPoint, setNearestPoint] = useState(null);
<<<<<<< HEAD
  const [sensorDetails, setSensorDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

=======
  const [selectedPoint, setSelectedPoint] = useState(null);
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
  const navigation = useNavigation();

  const initialRegion = {
    latitude: -22.9140639,
    longitude: -47.068686,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const fixedPoints = [
    {
      id: 1,
<<<<<<< HEAD
      name: 'Banheiro Feminino',
      latitude: -22.914140,
      longitude: -47.068620,
      temp: 25,
      humidity: 60,
      luminosity: 300,
    },
    {
      id: 2,
      name: 'A102-Laboratório de Manufatura',
      latitude: -22.9141952,
      longitude: -47.0683711,
      temp: 23,
      humidity: 55,
      luminosity: 280,
=======
      name: 'Banheiro Masculino',
      latitude: -22.914140,
      longitude: -47.068620,
    },
    {
      id: 2,
      name: 'Banheiro Feminino',
      latitude: -22.914166,
      longitude: -47.068355,
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const getLocation = async () => {
=======
    (async () => {
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          const nearest = findNearestPoint(newLocation.coords);
          setNearestPoint(nearest);
        }
      );

      return () => {
        locationSubscription.remove();
      };
<<<<<<< HEAD
    };

    getLocation();
  }, []);

  useEffect(() => {
    // Fetch initial sensor data
    fetchSensorData();
  }, []);

  async function fetchSensorData() {
    setLoading(true);
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await axios.get(
        `https://manuellycarvalho.pythonanywhere.com/api/sensores/`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );

      const sensores = response.data;
      const novosPontos = sensores.map(sensor => ({
        id: sensor.id,
        latitude: sensor.latitude,
        longitude: sensor.longitude,
        tipo: sensor.tipo,
        localizacao: sensor.localizacao,
        // Calcula a distância para cada sensor
        distance: calculateDistance(
          location.latitude,
          location.longitude,
          sensor.latitude,
          sensor.longitude
        )
      }));

      setPontos(novosPontos);
      setLoading(false);

      // Encontra o sensor mais próximo após atualizar as distâncias
      const nearest = findNearestSensor(novosPontos);
      setNearestPoint(nearest);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

=======
    })();
  }, []);

>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
<<<<<<< HEAD
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;
=======
    const Δλ = ((lon1 - lon2) * Math.PI) / 180;
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;

    return d;
  }

  function findNearestPoint(userLocation) {
    let nearestPoint = null;
    let minDistance = Infinity;
<<<<<<< HEAD
  
    // Verifica os pontos fixos
=======

>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    fixedPoints.forEach(point => {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        point.latitude,
        point.longitude
      );
<<<<<<< HEAD
  
=======

>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = { ...point, distance };
      }
    });
<<<<<<< HEAD
  
    // Verifica os pontos dinâmicos da API
    pontos.forEach(point => {
      const distance = point.distance;
  
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = { ...point, distance };
      }
    });
  
    return nearestPoint;
  }
  

  function findNearestSensor(sensorList) {
    let nearestSensor = null;
    let minDistance = Infinity;

    sensorList.forEach(sensor => {
      if (sensor.distance < minDistance) {
        minDistance = sensor.distance;
        nearestSensor = sensor;
      }
    });

    return nearestSensor;
  }

  async function fetchSensorDetails(sensorId) {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      
      // Primeira chamada para obter os detalhes do sensor
      const responseSensor = await axios.get(
        `https://manuellycarvalho.pythonanywhere.com/api/sensores/${sensorId}/`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );
  
      // Segunda chamada para obter os dados de temperatura
      const responseTemperature = await axios.get(
        `https://manuellycarvalho.pythonanywhere.com/api/temperatura/`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );
  
      const sensorData = responseSensor.data;
      const temperatureData = responseTemperature.data;
  
      // Aqui você pode acessar os campos específicos do sensor e temperatura
      const { tipo, localizacao } = sensorData;
      const { temperatura, umidade, luminosidade, contador } = temperatureData;
  
      setSensorDetails({
        ...sensorData,
        temperatura,
        umidade,
        luminosidade,
        contador
      });
      setModalVisible(true);
    } catch (error) {
      // Tratamento de erros
      console.error('Error fetching sensor details:', error);
      setError('Erro ao buscar detalhes do sensor. Por favor, tente novamente mais tarde.');
    }
  }
  
  function handleMarkerPress(marker) {
    // Example of handling marker press
    console.log('Marker pressed:', marker);
    // You can implement actions like fetching details, navigating to another screen, etc.
    // For example, fetching sensor details for dynamic markers
    fetchSensorDetails(marker.id);
  }

=======

    return nearestPoint;
  }

  const handleMarkerPress = (point) => {
    setSelectedPoint(point);
  };

  
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
  let nearestText = '';
  if (nearestPoint) {
    nearestText = `Ponto mais próximo: ${nearestPoint.name}\nDistância: ${nearestPoint.distance.toFixed(2)} metros`;
  }

<<<<<<< HEAD
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <MapView
=======
  let selectedPointText = '';
  if (selectedPoint) {
    if (selectedPoint.latitude === location?.latitude && selectedPoint.longitude === location?.longitude) {
      selectedPointText = 'Este é o ponto onde você está!';
    } else {
      const distance = calculateDistance(
        location.latitude,
        location.longitude,
        selectedPoint.latitude,
        selectedPoint.longitude
      );
      selectedPointText = `Ponto selecionado: ${selectedPoint.name}\nDistância: ${distance.toFixed(2)} metros`;
    }
  }

  let locationText = 'Esperando...';
  if (errorMsg) {
    locationText = errorMsg;
  } else if (location) {
    // locationText = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
  }
  
  return (
    <View style={styles.container}>
      <MapView
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
<<<<<<< HEAD
        {/* Renderiza os pontos fixos */}
=======
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
        {fixedPoints.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
<<<<<<< HEAD
            title={point.name}
            description={`Temp: ${point.temp}ºC | Humidity: ${point.humidity}% | Luminosity: ${point.luminosity} lux`}
=======
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
            pinColor="blue"
            onPress={() => handleMarkerPress(point)}
          />
        ))}
<<<<<<< HEAD

        {/* Renderiza os pontos dinâmicos vindos da API */}
        {pontos.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.localizacao}
            description={`Tipo: ${point.tipo}`}
            pinColor="green"
            onPress={() => handleMarkerPress(point)}
          />
        ))}

        {/* Renderiza a localização do usuário se disponível */}
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Minha Localização"
            pinColor="red"
          />
        )}
    </MapView>

      
      <View style={[styles.iconContainer, { marginBottom: 20 }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Salas')}>
          <View style={styles.iconItem}>
            <Icon name="graduation-cap" size={30} color="blue" />
            <Text style={styles.iconText}>Salas</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.iconItem, { marginRight: 20 }]}>
          <Icon name="flask" size={30} color="blue" />
          <Text style={styles.iconText}>Laboratório</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="book" size={30} color="blue" />
          <Text style={styles.iconText}>Biblioteca</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="users" size={30} color="blue" />
=======
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            pinColor="red"
          />
        )}
      </MapView>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Salas')}>
          <View style={styles.iconItem}>
            <Icon name="graduation-cap" size={30} color="red" />
            <Text style={styles.iconText}>Salas</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconItem}>
          <Icon name="flask" size={30} color="red" />
          <Text style={styles.iconText}>Laboratório</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="book" size={30} color="red" />
          <Text style={styles.iconText}>Biblioteca</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="users" size={30} color="red" />
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
          <Text style={styles.iconText}>Corredor</Text>
        </View>
      </View>

<<<<<<< HEAD
      {nearestPoint && (
        <View style={[styles.nearestPointContainer, { marginTop: 100 }]}>
          <Text style={styles.nearestPointText}>
            {nearestText}
          </Text>
          <Button title="Ver Detalhes" onPress={() => fetchSensorDetails(nearestPoint.id)} />
        </View>
      )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {sensorDetails ? (
                <View>
                  <Text style={styles.modalText}>Detalhes do Sensor:</Text>
                  <Text style={styles.modalText}>{`ID: ${sensorDetails.id}`}</Text>
                  <Text style={styles.modalText}>{`Tipo: ${sensorDetails.tipo}`}</Text>
                  <Text style={styles.modalText}>{`Localização: ${sensorDetails.localizacao}`}</Text>
                  <Text style={styles.modalText}>{`Temperatura: ${sensorDetails.temperatura}ºC`}</Text>
                  <Text style={styles.modalText}>{`Umidade: ${sensorDetails.umidade}%`}</Text>
                  <Text style={styles.modalText}>{`Luminosidade: ${sensorDetails.luminosidade} lux`}</Text>
                  <Text style={styles.modalText}>{`Contador: ${sensorDetails.contador}`}</Text>
                </View>
              ) : (
                <Text style={styles.modalText}>Carregando detalhes do sensor...</Text>
              )}
              <Button
                onPress={() => setModalVisible(false)}
                title="Fechar"
                color="#841584"
              />
            </View>
          </View>
        </Modal>

    </ScrollView>
  );
}

=======
      <Text>{locationText}</Text>
      {nearestPoint && (
        <View style={styles.nearestPointContainer}>
          <Text style={styles.nearestPointText}>
            {nearestText}
          </Text>
        </View>
      )}
      {selectedPoint && (
        <TouchableOpacity
          style={styles.selectedPointContainer}
          onPress={() => setSelectedPoint(null)}
        >
          <Text style={styles.selectedPointText}>
            {selectedPointText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
