import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers["app_id"] = process.env.API_ID;
  config.headers["app_key"] = process.env.API_KEY;
  config.headers["ResourceVersion"] = process.env.API_VERSION;
  config.headers["Accept"] = "application/json";
  return config;
});

export default api;
