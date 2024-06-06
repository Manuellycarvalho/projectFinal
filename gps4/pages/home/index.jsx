import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const Home = ({ navigation }) => {
  const handleSignOut = () => {
    navigation.navigate('SignIn');
  };

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
