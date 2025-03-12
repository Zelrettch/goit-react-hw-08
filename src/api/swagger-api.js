import axios from "axios";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export function setToken(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function clearToken() {
  api.defaults.headers.common.Authorization = "";
}

export default api;
