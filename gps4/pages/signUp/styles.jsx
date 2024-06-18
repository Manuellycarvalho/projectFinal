import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
form: {
    width: '100%',
},
formGroup: {
    marginBottom: 20,
},
label: {
    fontWeight: 'bold',
    marginBottom: 5,
},
input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
},
button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
loginTextContainer: {
    marginTop: 20,
    alignItems: 'center',
},
loginText: {
    fontSize: 16,
    color: '#333',
},
loginLink: {
    color: '#007bff',
    fontWeight: 'bold',
},
alert: {
    backgroundColor: '#d4edda',
    borderWidth: 1,
    borderColor: '#c3e6cb',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
},
alertText: {
    color: '#155724',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
});

export default styles;
