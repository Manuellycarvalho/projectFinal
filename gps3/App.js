import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const bounds = {
    north: -22.9138,
    south: -22.9145,
    west: -47.0687,
    east: -47.0679,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;	
      }

      Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      }, (newLocation) => {
        setLocation(newLocation.coords);
      });
    })();
  }, []);

  const calculatePosition = () => {
    if (!location) return null;

    const { latitude, longitude } = location;

    if (latitude < bounds.south || latitude > bounds.north || longitude < bounds.west || longitude > bounds.east) {
      return null;
    }

    const top = ((bounds.north - latitude) / (bounds.north - bounds.south)) * 100;
    const left = ((longitude - bounds.west) / (bounds.east - bounds.west)) * 100;

    return { latitude, longitude, top, left };
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.9141,
          longitude: -47.0681,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {calculatePosition() && (
          <Marker
            coordinate={{
              latitude: calculatePosition().latitude,
              longitude: calculatePosition().longitude,
            }}
            title={"Your Location"}
            description={"You are here"}
          />
        )}
      </MapView>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
  },
});
