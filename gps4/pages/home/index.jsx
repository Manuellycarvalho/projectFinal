import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Home = ({ navigation }) => {
  const handleSignOut = () => {
    navigation.navigate('SignIn');
  };

  const navigateToMap = () => {
    navigation.navigate('Map');
  };

  const navigateToSensors = () => {
    navigation.navigate('Sensor');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
        />
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToMap}>
          <Icon name="map" size={50} color="blue" />
          <Text style={styles.iconText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem} onPress={navigateToSensors}>
          <Icon name="microchip" size={50} color="green" />
          <Text style={styles.iconText}>Sensores</Text>
        </TouchableOpacity>
        <View style={styles.gridItem}>
          <Icon name="thermometer-half" size={50} color="red" />
          <Text style={styles.iconText}>Temperatura</Text>
        </View>
        <View style={styles.gridItem}>
          <Icon name="tint" size={50} color="blue" />
          <Text style={styles.iconText}>Umidade</Text>
        </View>
        <View style={styles.gridItem}>
          <Icon name="sun-o" size={50} color="yellow" />
          <Text style={styles.iconText}>Luminosidade</Text>
        </View>
      </View>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Home;
