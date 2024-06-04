import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Você pode usar outros conjuntos de ícones, como Feather, MaterialIcons, etc.

const salas = ({ navigation }) => {
  const handleSignOut = () => {
    // Implemente a lógica de saída, se necessário
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo à tela Home!</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          // Aqui você pode adicionar manipuladores de eventos, como onChangeText, onSubmitEditing, etc.
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#40E0D0',
  },
  header: {
    width: '100%',
    backgroundColor: '#40E0D0', // Cor do cabeçalho
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff', // Cor do texto do cabeçalho
  },
  searchInput: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  gridItem: {
    width: '40%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default salas;
