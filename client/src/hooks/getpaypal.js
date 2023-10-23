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

export const paidOrder = async (orderId) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${baseURL}/:${orderId}/paid`,
      headers: {
        contentType: 'application/json',
      },
      withCredentials: true,
      data: orderId,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
