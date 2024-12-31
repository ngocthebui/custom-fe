import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const login = (authRequest) => {
  return axios.post(`${API_BASE_URL}/auth/login`, authRequest);
};