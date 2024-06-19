import React from 'react';
<<<<<<< HEAD
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

=======
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
const Home = ({ navigation }) => {
  const handleSignOut = () => {
    navigation.navigate('SignIn');
  };

<<<<<<< HEAD
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
=======
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Bem-vindo à tela Home!</Text> */}
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
      
        />
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Icon name="map" size={50} color="blue" />
          <Text style={styles.iconText}>Mapa</Text>
        </View>
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
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

<<<<<<< HEAD
=======

>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
export default Home;
