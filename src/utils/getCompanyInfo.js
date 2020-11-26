import axios from 'axios';
import SERVER_URL from '../actions/serverURL';

export const getCompanyInfo = async (ticker) => {
  const config = { withCredentials: true };
  try {
    const response = await axios.get(`${SERVER_URL}/api/stock/info/${ticker}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}