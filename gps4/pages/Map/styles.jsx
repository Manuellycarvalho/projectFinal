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
});

export default styles;
