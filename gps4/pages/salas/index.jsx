import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Classes = ({ navigation }) => {
  const handleSignOut = () => {
    // Implemente a lógica de saída, se necessário
    navigation.navigate('Map');
  };

  const TableWithOptions = () => {
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
    const renderOptions = () => {
      if (showOptions) {
        return (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Text>Opção 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Opção 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Opção 3</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return null;
    };
  
    // Função para renderizar um item da tabela
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={handleItemClick}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        {renderOptions()} {/* Renderiza a lista de opções */}
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
