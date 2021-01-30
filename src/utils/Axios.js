import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../config";

const Axios = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 1000 * 15
});
// Axios.interceptors.request.use(async config => {
//     const token = await AsyncStorage.getItem('token')
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

export default Axios