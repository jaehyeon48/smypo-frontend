import axios from 'axios';

import SERVER_URL from '../actions/serverURL';

export const getRealTimePrice = async (ticker) => {
  const config = { withCredentials: true };
  try {
    const response = await axios.get(`${SERVER_URL}/api/stock/realTime/${ticker}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}