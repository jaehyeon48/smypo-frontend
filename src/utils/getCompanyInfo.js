import axios from 'axios';

export const getCompanyInfo = async (ticker) => {
  const config = { withCredentials: true };
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/info/${ticker}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}