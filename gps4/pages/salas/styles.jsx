import {StyleSheet} from 'react-native'

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
      backgroundColor: '#40E0D0',
      paddingVertical: 10,
      marginBottom: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      color: '#fff', 
    },
    searchInput: {
      width: '90%',
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginTop: 100,
      marginBottom: 100,
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
    container: {
        flex: 1,
      },
      item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      optionsContainer: {
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
  });


export default styles