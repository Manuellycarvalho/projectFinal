import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Classes = ({ navigation }) => {
  const handleSignOut = () => {
<<<<<<< HEAD
=======
    // Implemente a lógica de saída, se necessário
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    navigation.navigate('Map');
  };

  const TableWithOptions = () => {
<<<<<<< HEAD
    const [showOptions, setShowOptions] = useState(false);

    const tableData = [
      { id: 1, name: 'Salas' }
    ];

    const handleItemClick = () => {
      setShowOptions(!showOptions);
    };

=======
    const [showOptions, setShowOptions] = useState(false); // Estado para controlar se as opções devem ser mostradas ou não
  
    // Dados da tabela (pode ser substituído pelos seus próprios dados)
    const tableData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ];
  
    // Função para manipular o clique em um item da tabela
    const handleItemClick = () => {
      setShowOptions(!showOptions); // Alterna entre mostrar e esconder as opções quando o item é clicado
    };
  
    // Função para renderizar a lista de opções
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    const renderOptions = () => {
      if (showOptions) {
        return (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
<<<<<<< HEAD
              <Text>Sala 105</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Sala 104</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Sala 103</Text>
=======
              <Text>Opção 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Opção 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Opção 3</Text>
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
            </TouchableOpacity>
          </View>
        );
      }
      return null;
    };
<<<<<<< HEAD

=======
  
    // Função para renderizar um item da tabela
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={handleItemClick}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
<<<<<<< HEAD

=======
  
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
    return (
      <View style={styles.container}>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
<<<<<<< HEAD
        {renderOptions()}
=======
        {renderOptions()} {/* Renderiza a lista de opções */}
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TableWithOptions />
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Classes;
