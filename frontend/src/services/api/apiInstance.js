import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://datastore-a3gj.onrender.com/`,
});

export default axiosInstance;
