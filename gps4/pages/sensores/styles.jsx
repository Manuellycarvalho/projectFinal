import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      scrollView: {
        flex: 1,
      },
      sensorContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
      sensorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      label: {
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      buttonDelete: {
        backgroundColor: '#dc3545',
      },    
})

export default styles