import axios from 'axios';

export const getRealTimePrice = async (ticker) => {
  const config = { withCredentials: true };
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/realTime/${ticker}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}