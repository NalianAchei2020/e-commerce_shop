import axios from 'axios';
const baseURL = 'http://localhost:8000';
export const getPaypalClientID = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/paypal/clientId`);
    return response.data.clientId;
  } catch (error) {
    throw new Error(error);
  }
};
