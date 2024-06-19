<<<<<<< HEAD
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  map: {
    width: '100%',
    height: 400, // Altura do mapa
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    color: 'blue', // Cor do texto dos ícones
  },
  nearestPointContainer: {
    alignItems: 'center',
  },
  nearestPointText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  openButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
=======
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
>>>>>>> 5014cddc5f729c01618f2f123ecaa1fa94305a45
});

export default styles;
