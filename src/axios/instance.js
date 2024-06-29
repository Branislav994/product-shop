import axios from "axios";

const api = axios.create({
  baseURL: "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/",
  timeout: 10000, // You can adjust the timeout value as needed
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need here
  },
});

export default api;
