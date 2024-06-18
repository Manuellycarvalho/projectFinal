import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cria uma instância do Axios
const instance = axios.create({
  baseURL: 'https://manuellycarvalho.pythonanywhere.com/token', // Defina a URL base da sua API
});

// Intercepta a requisição para incluir o token de autenticação
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Failed to fetch user token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
