import axios from 'axios';
import { getToken } from './utils/tokenStorage'; // Substitua com o caminho correto do arquivo onde você definiu a função getToken

const axiosInstance = axios.create({
  baseURL: 'https://manuellycarvalho.pythonanywhere.com/api/token/', // URL base da sua API
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
