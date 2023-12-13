import axios from 'axios';

const baseURL = 'https://e-commerce-backend-thjf.onrender.com';
export const getPaypalClientID = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/paypal/clientId`);
    return response.data.clientId;
  } catch (error) {
    throw new Error(error);
  }
};
