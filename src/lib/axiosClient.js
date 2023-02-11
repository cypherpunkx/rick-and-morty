import axios from "axios";
import { stringify } from "qs";

const axiosClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  paramsSerializer: {
    serialize: stringify,
  },
});

axiosClient.interceptors.request.use((config) => config);
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
