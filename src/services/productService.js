import api from "../axios/instance";


export const fetchProducts = async () => {
  const response = await api.get();
  return response.data;
};
