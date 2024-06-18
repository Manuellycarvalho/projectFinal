import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Classes = ({ navigation }) => {
  const handleSignOut = () => {
    navigation.navigate('Map');
  };

  const TableWithOptions = () => {
    const [showOptions, setShowOptions] = useState(false);

    const tableData = [
      { id: 1, name: 'Salas' }
    ];

    const handleItemClick = () => {
      setShowOptions(!showOptions);
    };

    const renderOptions = () => {
      if (showOptions) {
        return (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Text>Sala 105</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Sala 104</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text>Sala 103</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return null;
    };

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
        {renderOptions()}
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
