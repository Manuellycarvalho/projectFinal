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
});

export default styles;
