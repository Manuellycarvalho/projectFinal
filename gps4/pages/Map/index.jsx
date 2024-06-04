import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearestPoint, setNearestPoint] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
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
      name: 'Banheiro Masculino',
      latitude: -22.914140,
      longitude: -47.068620,
    },
    {
      id: 2,
      name: 'Banheiro Feminino',
      latitude: -22.914166,
      longitude: -47.068355,
    }
  ];

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon1 - lon2) * Math.PI) / 180;

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

    fixedPoints.forEach(point => {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        point.latitude,
        point.longitude
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = { ...point, distance };
      }
    });

    return nearestPoint;
  }

  const handleMarkerPress = (point) => {
    setSelectedPoint(point);
  };

  
  let nearestText = '';
  if (nearestPoint) {
    nearestText = `Ponto mais próximo: ${nearestPoint.name}\nDistância: ${nearestPoint.distance.toFixed(2)} metros`;
  }

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
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        {fixedPoints.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            pinColor="blue"
            onPress={() => handleMarkerPress(point)}
          />
        ))}
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
          <Text style={styles.iconText}>Corredor</Text>
        </View>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
    marginTop: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
    marginTop: 10,
  },
  iconText: {
    marginTop: 5,
  },
  nearestPointContainer: {
    position: 'absolute',
    bottom: 140,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  nearestPointText: {
    marginBottom: 5,
  },
  selectedPointContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  selectedPointText: {
    marginBottom: 5,
  },
});
