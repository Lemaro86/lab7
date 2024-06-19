import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://localhost:8000'})
// export const axiosInstance = axios.create({ baseURL: 'http://192.168.1.143:8000'})
