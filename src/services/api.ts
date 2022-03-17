import axios from "axios";
import { TOKEN_IPV4 } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `http://${TOKEN_IPV4}:3333`
});

export default api;