import axios from 'axios';

export const getCompanyInfo = async (ticker) => {
  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/company?token=${process.env.REACT_APP_IEX_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}