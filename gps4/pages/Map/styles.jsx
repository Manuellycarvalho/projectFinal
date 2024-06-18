import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#8a2be2',
    padding: 20,
  },

  map: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  iconItem: {
  flexDirection: 'row', // Para alinhar ícone e texto na horizontal
  alignItems: 'center', // Para centralizar verticalmente
  marginRight: 20, // Espaçamento à direita entre os ícones
},

  iconText: {
    marginTop: 5,
    color: '#fff',
  },
  nearestPointContainer: {
    position: 'absolute',
    marginTop: 100,
    bottom: 160,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    width: width - 40,
    alignItems: 'center',
  },
  nearestPointText: {
    marginBottom: 5,
    color: '#333',
  },
  selectedPointContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    marginTop: 30, // Margem superior adicional apenas para o segundo ícone
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    width: width - 40,
    alignItems: 'center',
  },
  selectedPointText: {
    marginBottom: 5,
    color: '#333',
  },
});

export default styles;
