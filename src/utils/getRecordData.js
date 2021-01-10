import axios from 'axios';

export const get10DaysOfRecord = async (portfolioId) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/record/10days/${portfolioId}`, config);

    return convertToDateString(response.data.records);
  } catch (error) {
    console.error(error);
  }
}

const convertToDateString = (records) => {
  records.forEach((record) => {
    record.recordDate = new Date(record.recordDate).toDateString().slice(4, 10)
  });

  return records;
}